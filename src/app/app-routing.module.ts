import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AptitudeComponent } from './home/aptitude/aptitude.component';
import { CDatatypesComponent } from './home/c++/c-datatypes/c-datatypes.component';
import { CLoopsComponent } from './home/c++/c-loops/c-loops.component';
import { COopsComponent } from './home/c++/c-oops/c-oops.component';
import { CVariablesComponent } from './home/c++/c-variables/c-variables.component';
import { DatatypesComponent } from './home/c/datatypes/datatypes.component';
import { FunctionsComponent } from './home/c/functions/functions.component';
import { LoopsComponent } from './home/c/loops/loops.component';
import { VariablesComponent } from './home/c/variables/variables.component';
import { ArraysComponent } from './home/coding/arrays/arrays.component';
import { RecursionComponent } from './home/coding/recursion/recursion.component';
import { TreeComponent } from './home/coding/tree/tree.component';
import { DataArchitectureComponent } from './home/dbms/data-architecture/data-architecture.component';

import { DataindependenceComponent } from './home/dbms/dataindependence/dataindependence.component';
import { DatamodalsComponent } from './home/dbms/datamodals/datamodals.component';
import { DataschemasComponent } from './home/dbms/dataschemas/dataschemas.component';
import { DivideComponent } from './home/ds/divide/divide.component';
import { GreedyalgoComponent } from './home/ds/greedyalgo/greedyalgo.component';
import { LinkedlistComponent } from './home/ds/linkedlist/linkedlist.component';
import { StackComponent } from './home/ds/stack/stack.component';

import { HomeComponent } from './home/home.component';
import { ArrayComponent } from './home/java/array/array.component';
import { ClassesComponent } from './home/java/classes/classes.component';
import { ObjectComponent } from './home/java/object/object.component';
import { StringComponent } from './home/java/string/string.component';
import { DirectoriesComponent } from './home/linux/directories/directories.component';
import { FiltersComponent } from './home/linux/filters/filters.component';
import { PipesComponent } from './home/linux/pipes/pipes.component';
import { ShellComponent } from './home/linux/shell/shell.component';
import { ArchitectureComponent } from './home/networking/architecture/architecture.component';
import { ModelsComponent } from './home/networking/models/models.component';
import { NetTypesComponent } from './home/networking/net-types/net-types.component';
import { TopologiesComponent } from './home/networking/topologies/topologies.component';
import { DefinationsComponent } from './home/os/definations/definations.component';
import { ProcessesComponent } from './home/os/processes/processes.component';
import { PropertiesComponent } from './home/os/properties/properties.component';
import { TypesComponent } from './home/os/types/types.component';
import { DictionaryComponent } from './home/python/dictionary/dictionary.component';
import { ListComponent } from './home/python/list/list.component';
import { PyFunctionComponent } from './home/python/py-function/py-function.component';
import { TupleComponent } from './home/python/tuple/tuple.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'', component: LoginFormComponent},
  {path:'login', component: LoginFormComponent},
  { path: 'nav', component: NavBarComponent },
  { path: 'home', component: HomeComponent, children : [

    {path:'aptitude', component:AptitudeComponent , outlet:"home"},
    {path:'', component:AptitudeComponent , outlet:"home"},
    {path:'defination', component:DefinationsComponent , outlet:"home"},
    {path:'processes', component:ProcessesComponent , outlet:"home"},
    {path:'types', component:TypesComponent , outlet:"home"},
    {path:'properties', component:PropertiesComponent , outlet:"home"},
    {path:'data-architecture', component:DataArchitectureComponent , outlet:"home"},
    {path:'datamodels', component:DatamodalsComponent , outlet:"home"},
    {path:'dataschemas', component:DataschemasComponent , outlet:"home"},
    {path:'dataindependence', component:DataindependenceComponent , outlet:"home"},
    {path:'architecture', component:ArchitectureComponent , outlet:"home"},
    {path:'topologies', component:TopologiesComponent , outlet:"home"},
    {path:'models', component:ModelsComponent , outlet:"home"},
    {path:'net_types', component:NetTypesComponent , outlet:"home"},
    {path:'datatypes', component:DatatypesComponent , outlet:"home"},
    {path:'variables', component:VariablesComponent , outlet:"home"},
    {path:'loops', component:LoopsComponent , outlet:"home"},
    {path:'functions', component:FunctionsComponent , outlet:"home"},
    {path:'c_datatypes', component:CDatatypesComponent , outlet:"home"},
    {path:'c_variables', component:CVariablesComponent , outlet:"home"},
    {path:'c_loops', component:CLoopsComponent , outlet:"home"},
    {path:'c_oops', component:COopsComponent , outlet:"home"},
    {path:'classes', component:ClassesComponent , outlet:"home"},
    {path:'object', component:ObjectComponent , outlet:"home"},
    {path:'array', component:ArrayComponent , outlet:"home"},
    {path:'string', component:StringComponent , outlet:"home"},
    {path:'list', component:ListComponent , outlet:"home"},
    {path:'tuple', component:TupleComponent , outlet:"home"},
    {path:'dictionary', component:DictionaryComponent , outlet:"home"},
    {path:'py_functions', component:PyFunctionComponent , outlet:"home"},
    {path:'divide', component:DivideComponent , outlet:"home"},
    {path:'stack', component:StackComponent , outlet:"home"},
    {path:'greedy', component:GreedyalgoComponent , outlet:"home"},
    {path:'linkedlist', component:LinkedlistComponent, outlet:"home"},
    {path:'shell', component:ShellComponent, outlet:"home"},
    {path:'pipes', component:PipesComponent},
    {path:'filters', component:FiltersComponent, outlet:"home"},
    {path:'directories', component:DirectoriesComponent, outlet:"home"},
<<<<<<< HEAD
    {path:'arr', component:ArraysComponent, outlet:"home"},
    {path:'tree', component:TreeComponent, outlet:"home"},
    {path:'recursion', component:RecursionComponent, outlet:"home"},
=======
>>>>>>> 641816f1b33ba4fbca9d5287e975f9f28d7083a3
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
