[![Netlify Status](https://api.netlify.com/api/v1/badges/7fcdc02c-76cb-4184-9204-9031f11e4e7b/deploy-status)](https://app.netlify.com/sites/ktscates-multi-step-form/deploys)

# Multi-Step Form

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Components](#components)
  - [PersonalInfoComponent](#personalinfocomponent)
  - [SelectPlansComponent](#selectplanscomponent)
  - [AddOnsComponent](#addonscomponent)
  - [SummaryComponent](#summarycomponent)
  - [ThankYouComponent](#thankyoucomponent)
  - [SideComponent](#sidecomponent)
  - [ButtonComponent](#buttoncomponent)
- [Live Link](#live-link)

## Introduction

This is a multi-step form application built using Angular and TailwindCSS. The application guides users through a process of entering personal information, selecting a plan, choosing add-ons, and reviewing their choices before confirming.

## Features

- Collect personal information including name, email, and phone number.
- Select a plan with options for monthly or yearly billing.
- Choose add-ons for the selected plan.
- Review and confirm the selected plan and add-ons.
- Display a thank you message after confirmation.

## Technologies Used

- Angular
- TailwindCSS

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ktscates/multi-step-form.git
   cd hangman-game
   ``
   ```

   2. **Install dependencies**:

```bash
   npm install
```

### Running the App

```bash
    ng serve
```

    Open your browser and navigate to http://localhost:4200/.

## Components

### PersonalInfoComponent
Handles the collection of user's personal information including name, email, and phone number.

### SelectPlansComponent
Allows users to select a plan. Users can choose between monthly and yearly billing options.

### AddOnsComponent
Lets users choose add-ons for the selected plan.

### SummaryComponent
Displays a summary of the selected plan and add-ons for user confirmation.

### ThankYouComponent
Shows a thank you message after confirmation.

### SideComponent
Displays the step indicators for the multi-step form.

### ButtonComponent
Handles navigation between steps, including "Next" and "Back" buttons.

## Live Link

You can access the deployed application at [Multi-Step Form](https://ktscates-multi-step-form.netlify.app/).

