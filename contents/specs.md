---
title: Smart Data Consumption Specifications
template: index.jade
---

## Background

From our user value propositions, users need to understand and track their data
usage, so they don’t go over budget. Users should be enabled to do more with
less. [1]

[1]:https://mozilla.app.box.com/files/0/f/1958416320/1/f_17084860470


## User Stories

From the user research, we've identified user stories which will help guide us
to materialize these value propositions.

* As a cost-conscious phone user, I want to be able to track individual app
network data usage so that I can be more informed how my data is being used.

* As a cost-conscious phone user, I want to be able to restrict specific apps
from using data *entirely*.

* As a cost-conscious phone user, I want to be able to restrict specific apps
from using data in the *background*.

* As a cost-conscious phone user, I want to restrict the usage of background
data on mobile networks when my battery level is low for all apps on the device.

* As a multiple-SIM user who swaps SIMs, I want to easily update my usage plan
configuration on my phone to reflect the SIM in use.

* As a multiple-SIM user, I want to be able to separately track data usage
associated with each SIM card so that I can understand my usage between SIMs.

* As a user, when I go to use an app when I am out of data I want to be informed
that I am out of data and be given the opportunity to purchase more so that I
don't get a generic error message.

* As a user, I want to be able to explicitly put my device into a mode whereby
no mobile data can be used to allow me to control when I do not want data to be
consumed.

* As a user, I want to be able to override the data saving mode for a specific
app, temporarily, so that I can use that app without all of my other apps also
using data.

## Firefox 2.1

### Entry Points

[![](images/specs/entry-points.png)](images/specs/entry-points.png)

In a multi-SIM situation, the settings view of *Figure 0.1* is the configuration
view for an individual SIM. Therefore pressing "Data usage and control" should
display that SIM when showing *Figure 1.0*.

### Usage Overview

[![](images/specs/usage-overview.png)](images/specs/usage-overview.png)

In a multi-SIM configuration, the SIM chosen for data connectivity in the SIM
Manager should be active view which is shown in *Figure 1.0*. The ordering of
the SIMs in the tab bar should not change.

The bar graphs for each application's usage should be proportional to the limit
displayed. In the case that an app's usage is too small to be shown accurately
as a bar graph, a small sliver should be shown as in the Map application in
*Figure 1.2*.

Usage bars which go above the limit should display a full bar graph along with
a visual style which indicates this. As an example, *Figure 1.2* shows the bars
displayed in red. The visual style should be sensitive to cultural meanings of
colours.

### Application Data Control

[![](images/specs/app-data-control.png)](images/specs/app-data-control.png)

The application data control view should show data and controls in the context
of the device and not tied to a particular SIM. Therefore in a multi-SIM
configuration, the data usage should reflect both SIMs combined. Data control
toggles should be global toggles, thus toggling active SIMs should retain the
the same data control settings per app.

Pressing the back button in the top left should go back to the previous screen,
ensuring of the previous screen is preserved.

The cycle's usage, seen in *A*, should substitute "month" with the user's chosen
cycle. For example, if they are on a weekly cycle it would say "X MB of data
used this week".

### Usage app configuration

When a user has changed their data plan with their service provider, they will
want their usage app configuration to reflect these changes. In the following
story, the user has upgraded from a weekly 200 MB plan to a 1GB monthly plan.

[![](images/specs/settings.png)](images/specs/settings.png)

The limit amount label, *A*, should update to reflect the type of plan
specified. "Limit per month", "Limit per week", and "Limit per day" should be
used for monthly, weekly and daily plan types respectively.

The plan start date, *B*, should update based on the plan type as well. The day
of the week should be shown for weekly plans. "Day X of each month" should be
shown for monthly plans. The input field should not be shown at for daily plans.

If the unlimited plan type is selected, no other configuration should be shown.
No notifications should ever be shown. The usage notification tray should not
be shown either.

These behaviours are reflected in the following figures.

[![](images/specs/settings-plan-types.png)](images/specs/settings-plan-types.png)

The device should remember SIM cards inserted and their respective plan
configurations.


### Notification tray bar

[![](images/specs/notification-tray.png)](images/specs/notification-tray.png)

In an unlimited plan configuration or when no SIM card is inserted, no tray bar
should be shown.


### Chart

### First Time Experience

### Data savings tips
