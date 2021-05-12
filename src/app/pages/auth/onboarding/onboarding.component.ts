import { Component, OnInit } from '@angular/core';

export enum OnboardingState {
  Username,
  Age,
  Creator,
  AdultContent,
  Banking
}

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  OnboardingState = OnboardingState;

  onboardingState: OnboardingState = OnboardingState.Username;

  constructor() {}

  ngOnInit(): void {}

  setState(state: OnboardingState) {
    this.onboardingState = state;
  }
}
