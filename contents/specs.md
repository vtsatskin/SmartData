---
title: Smart Data Consumption Specifications
template: index.jade
---

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

Pressing the back button in the top right should go back to the previous screen,
ensuring of the previous screen is preserved.

The cycle's usage, seen in *A*, should substitute "month" with the user's chosen
cycle. For example, if they are on a weekly cycle it would say "X MB of data
used this week".

In a multi-SIM configuration, seen in *Figure 2.1*, heading *D* should indicate
which SIM is being configured. Controls *B* and *C* should be tied to the SIM
and not a global setting.


### Chart

### First Time Experience

### Cycle Configuration

### Data savings tips
