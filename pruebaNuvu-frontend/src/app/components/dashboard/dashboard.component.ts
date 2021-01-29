import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ServicePragmaticService } from 'src/app/service/service-pragmatic.service';
import { Title } from '@angular/platform-browser';
import { DataTableDirective } from 'angular-datatables';
import { environment } from 'src/environments/environment';
import { Validators, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente-model';
import { ClienteUpd } from 'src/app/models/clienteUpdate-model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    public clienteForm = this.fb.group({        
        userId: ['', Validators.required],
        typeId: ['', Validators.required],
        name: ['', Validators.required],
        surname: ['', Validators.required],
        edita: ['', Validators.required]
    });

    constructor(private fb: FormBuilder,
        public servicePragmatic: ServicePragmaticService,
        private titleService: Title) {
        this.Cliente = {
            identificacion: null,            
            nombres: null,
            apellidos: null,            
            genero: null
        }
        this.ClienteId = {
            identificacion: null,            
            nombres: null,
            apellidos: null,            
            genero: null
        }
        this.ClienteUpd = {
            identificacion: null,            
            nombres: null,
            apellidos: null,            
            genero: null,
            id:null
        }
    }

    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    Lista: any = [];
    listTypeId: any = [];
    ValidaUsuario: number;
    Cliente: Cliente;
    ClienteId: Cliente;
    ClienteResponse: any;
    ClienteUpd: ClienteUpd;
    editar: string = '0';

    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            language: environment.language,
        };
        this.loadTypeIds();
        this.loadData();
    }

    async loadData() {
        var response = await this.servicePragmatic.getClientes();
        this.Lista = response;
        console.log(this.Lista)
        this.rerender();

    }

    async loadTypeIds() {
        var response = await this.servicePragmatic.getTiposIds();
        this.listTypeId = response;
        console.log(this.Lista)
        this.rerender();

    }

    ngAfterViewInit() {
        this.dtTrigger.next();

    }


    rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
        });
    }


    Guardar(): void {
        if (this.clienteForm.valid) {
            if (this.clienteForm.controls.edita.value === '0') {  // crear
                this.Cliente.identificacion = this.clienteForm.controls.userId.value;
                this.Cliente.genero = this.clienteForm.controls.typeId.value;
                this.Cliente.nombres = this.clienteForm.controls.name.value;
                this.Cliente.apellidos = this.clienteForm.controls.surname.value;                
                this.servicePragmatic.postInsertCliente(this.Cliente);                
                this.loadData();                   
                alert('Registro Creado con Éxito');
            }
            else { // actualizar                          
                this.servicePragmatic.putCliente(this.ClienteUpd);                
                this.loadData();                
                this.editar = '0';
                alert('Registro Actualizado con Éxito');
            }
        }
        else if(this.clienteForm.controls.password.value===null || this.clienteForm.controls.password.value.length <3){
            alert('La contraseña debe tener minimo 3 caracteres');
        }
        else {
            alert('Formulario incompleto');
        }
    }

    Eliminar(element): void {
        this.servicePragmatic.postDeleteCliente(element);        
        alert('Registro Eliminado con Éxito');
        this.loadData();        
    }

    async Buscar(element) {
        var response = await this.servicePragmatic.getCliente(element);
        this.ClienteUpd = response;
        console.log(this.ClienteId)                
        this.editar = '1';
        alert('Por favor, actualice el registro');
    }


}
