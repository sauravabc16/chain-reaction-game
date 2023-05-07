import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'server-creation',
  templateUrl: './server-creation.component.html',
  styleUrls: ['./server-creation.component.scss'],
})
export class ServerCreationComponent implements OnInit {
  createForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      gameName: new FormControl('', [Validators.required]),
      maxPlayers: new FormControl(4, [Validators.required, Validators.min(2), Validators.max(10)]),
      password: new FormControl(''),
    });
  }

  onCreateServer() {
    console.log(this.createForm.value);
  }
}
