import { Injectable } from '@angular/core';
import { Exercise } from './exercise.mode';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];
  constructor() {}

  getAvailableExercises() {
    return this.availableExercises.slice();
  }
}
