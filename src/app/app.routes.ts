import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionsComponent } from './pages/questions/questions.component';

const pageTitle: string = 'Passei Direto';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, title: `${pageTitle} | Quem passa, passa aqui`, pathMatch: 'full'
    },
    {
        path: 'perguntas-respostas', component: QuestionsComponent, title: `${pageTitle} | Perguntas e respostas`
    }
];
