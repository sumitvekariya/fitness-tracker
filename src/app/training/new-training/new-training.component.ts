import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.mode';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Exercise[] = [];
  constructor(
    private trainingService: ExerciseService
  ) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

}
