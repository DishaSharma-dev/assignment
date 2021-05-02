import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from "@angular/router";
import { AptitudeComponent } from './home/aptitude/aptitude.component';
import { DefinationsComponent } from './home/os/definations/definations.component';
import { ProcessesComponent } from './home/os/processes/processes.component';
import { TypesComponent } from './home/os/types/types.component';
import { PropertiesComponent } from './home/os/properties/properties.component';
import { DatamodalsComponent } from './home/dbms/datamodals/datamodals.component';
import { DataschemasComponent } from './home/dbms/dataschemas/dataschemas.component';
import { DataindependenceComponent } from './home/dbms/dataindependence/dataindependence.component';
import { TopologiesComponent } from './home/networking/topologies/topologies.component';
import { ModelsComponent } from './home/networking/models/models.component';
import { DataArchitectureComponent } from './home/dbms/data-architecture/data-architecture.component';
import { DatatypesComponent } from './home/c/datatypes/datatypes.component';
import { VariablesComponent } from './home/c/variables/variables.component';
import { LoopsComponent } from './home/c/loops/loops.component';
import { FunctionsComponent } from './home/c/functions/functions.component';
import { CDatatypesComponent } from './home/c++/c-datatypes/c-datatypes.component';
import { CVariablesComponent } from './home/c++/c-variables/c-variables.component';
import { CLoopsComponent } from './home/c++/c-loops/c-loops.component';
import { COopsComponent } from './home/c++/c-oops/c-oops.component';
import { ObjectComponent } from './home/java/object/object.component';
import { ClassesComponent } from './home/java/classes/classes.component';
import { ArrayComponent } from './home/java/array/array.component';
import { StringComponent } from './home/java/string/string.component';
import { ListComponent } from './home/python/list/list.component';
import { TupleComponent } from './home/python/tuple/tuple.component';
import { DictionaryComponent } from './home/python/dictionary/dictionary.component';
import { PyFunctionComponent } from './home/python/py-function/py-function.component';
import { DivideComponent } from './home/ds/divide/divide.component';
import { StackComponent } from './home/ds/stack/stack.component';
import { GreedyalgoComponent } from './home/ds/greedyalgo/greedyalgo.component';
import { LinkedlistComponent } from './home/ds/linkedlist/linkedlist.component';
import { ShellComponent } from './home/linux/shell/shell.component';
import { PipesComponent } from './home/linux/pipes/pipes.component';
import { FiltersComponent } from './home/linux/filters/filters.component';
import { DirectoriesComponent } from './home/linux/directories/directories.component';
import { NetTypesComponent } from './home/networking/net-types/net-types.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginFormComponent,
    HomeComponent,
    AptitudeComponent,
    DefinationsComponent,
    ProcessesComponent,
    TypesComponent,
    PropertiesComponent,
    DatamodalsComponent,
    DataschemasComponent,
    DataindependenceComponent,
    TopologiesComponent,
    ModelsComponent,
    DataArchitectureComponent,
    DatatypesComponent,
    VariablesComponent,
    LoopsComponent,
    FunctionsComponent,
    CDatatypesComponent,
    CVariablesComponent,
    CLoopsComponent,
    COopsComponent,
    ObjectComponent,
    ClassesComponent,
    ArrayComponent,
    StringComponent,
    ListComponent,
    TupleComponent,
    DictionaryComponent,
    PyFunctionComponent,
    DivideComponent,
    StackComponent,
    GreedyalgoComponent,
    LinkedlistComponent,
    ShellComponent,
    PipesComponent,
    FiltersComponent,
    DirectoriesComponent,
    NetTypesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
