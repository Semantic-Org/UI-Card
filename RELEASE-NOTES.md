### Version 2.2.10 - March 28, 2017

-**Form** - Credit card validation now no longer fails validation with dashed credit card values #5122 **Thanks @neokio**

### Version 2.2.0 - June 26, 2016

- **Card** - Added `raised` card variation **Thanks @yordis** [#2955](https://github.com/Semantic-Org/Semantic-UI/issues/2955)

#### Features

- **Cards** - Added documentation for `stackable` cards which was available but undocumented in previous versions.
- **Form Validation** - Added credit card validation, supports array of card types, and international cards including non luhn cards like China UnionPay [#2729](https://github.com/Semantic-Org/Semantic-UI/issues/2729)

### Version 2.0.1 - July 6, 2015

- **Card** - `centered cards` variation now works similar to `centered card`. [#2520](https://github.com/Semantic-Org/Semantic-UI/issues/2520)

### Version 2.0.0 - June 30, 2015

- **Card** - Cards now support multiple custom `content` blocks. Content blocks and images can now appear in any order.
- **Card** - Card now includes a `centered` variation
- **Card** - IE11 now can correctly use  `flexbox` cards **Thanks @Widcket**
- **Card** - Card styles have been adjusted, `link card` now raise to show selection. Colored variations now have shadows.

### Version 1.11.7 - April 13, 2015

- **Card** - Fixes card `flex` display issues in IE

### Version 1.11.5 - March 23, 2015

- **Card** - Fixes dimmer background shorthand property causes transparent dimmer in minified version

### Version 1.11.2 - March 6, 2015

- **Card/Dimmer** - Fix dimmer z-index being too high when inside a `ui card`. Added variable for specifying default dimmer color inside card.

### Version 1.10.0 - February 23, 2015

- **Cards** - Fix `.ui.cards > .ui.card` margins to match `.ui.cards > .card` margins
- **Cards** - Fix consecutive card groups to preserve row flow (similar to consecutive grids)

### UI Changes

- **Card** - Cards now equalize height by default using `display: flex`. No longer are card heights required to be specified manually to align
- **Card** - Card now has colored variations **Thanks @romuloctba**
- **Label** - `ribbon label` can now be used inside `ui image` and `ui card` correctly
- **Card** - Star / Like button colors have been fixed to match `ui rating` inside `card`
- **Card** - Hiding a card with `display: none` no longer causes layout issues with `(x) cards`
- **Card** - `image` inside `content` no longer has a fixed size **Thanks @romuloctba**

### Version 1.2.0 - December 08, 2014

- **Item/Card** - Default link formatting inside element simplified to avoid adjusting other nested ``ui`` link styles

### Version 1.0.1 - November 28, 2014

- **Card/Item** - Fix generic link stylings erroneously affecting linked ui elements like buttons

### Version 1.0.0 - November 24, 2014

- **Item** - 0.x.x's UI card has been adjusted heavily. Vertically listed content should use ``ui item`` while floated grouped content should continue to use ``ui card``. Some 'card' view content has been slightly adjusted. Please refer to documentation

### Version 0.1.0 - Sep 25, 2013