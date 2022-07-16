import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formulario } from 'src/app/models/formulario.model';
import { Marca } from 'src/app/models/marca.model';
import { FormularioService } from 'src/app/services/formulario.service';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-ver-formulario',
  templateUrl: './ver-formulario.component.html',
  styleUrls: ['./ver-formulario.component.css']
})
export class VerFormularioComponent implements OnInit {

  formulario:Formulario = new Formulario();
  marcas:Marca[];
  constructor(private route: ActivatedRoute,private serviceFormulario:FormularioService,private serviceMarcas:MarcaService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));



    setTimeout(() => {
      this.serviceMarcas.getMarcas().subscribe(result=>{
    
        this.marcas = JSON.parse(JSON.stringify(result));

        this.serviceFormulario.getFormulario(id).subscribe(result=>{
  
          this.formulario = JSON.parse(JSON.stringify(result));
    
    
        });

      });
  
  }, 500);

    

  }

}
