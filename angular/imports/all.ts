// List of all covered import usages:
// 1. Basic Module Import
≠import { BrowserModule } from '@angular/platform-browser';≠
// 2. Importing a Single Export (Component, Service, etc.)
≠import { AppComponent } from './app.component';≠
// 3. Import Multiple Entities
≠import { ComponentOne, ComponentTwo } from './components';≠
// 4. Import All Under An Alias
≠import * as SomeAlias from './path-to/file';≠
// 5. Renaming an Import
≠import { OldName as NewName } from './my-module';≠
// 6. Importing Default
≠import SomeDefaultObject from './path-to-file-with-default';≠
// 7. Dynamic Import
let modulePath = './path-to-file';
import(modulePath)
  .then(module => {
    // Use module...
  });
// 8. Multiline Import
≠import {
  ComponentOne,
  ComponentTwo,
  ComponentThree,
  ComponentFour,
  ComponentFive
} from './my-components';≠
// 9. Import Within the Body of Code
function someFunction() {
  // Some code...

  ≠import { SomeComponent } from './some-component';≠

  // More code...
}
// 10. Importing Types (TypeScript specific)
≠import { SomeType } from './some-module';≠
// 11. Side-Effect Imports
≠import './my-module';≠
// 12. Module Re-Exporting
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
// 13. Relative Path Import
≠import SomeModule from './relative-path-to-file';≠
// 14. File Extension Specific Import
≠import SomeModule from './module.js';≠
// 15. Chained Module Re-Exporting
export * from 'some-module';
export * from 'another-module';
// 16. async/await with dynamic import
let MyComponent;

async function getMyComponent() {
  const module = await import('./MyComponent.vue');
  MyComponent = module.default || module;
}
