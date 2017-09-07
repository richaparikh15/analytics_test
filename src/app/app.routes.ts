// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Route Configuration
export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: 'about', component: AboutComponent },
	{ path: 'courses', component: CoursesComponent },
	{ path: 'course/:id', component: CourseDetailsComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'testimonials', component: TestimonialsComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);