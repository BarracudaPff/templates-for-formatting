<script>
// Vue.js file using JavaScript/ES6:
// Default import
// Named imports
// Importing everything as an object
// Aliased imports
// Dynamic imports
// Multiline imports
// Imports in the middle of the code (although it is good practice to have all imports at the top of your file)
// Async/await with dynamic imports

// Importing a default export
≠import MyComponent from './MyComponent.vue';≠

// Importing a named export
≠import {ComponentFunction} from './MyComponent.vue';≠

// Importing everything as an object
≠import * as MyComponentAll from './MyComponent.vue';≠

// Importing with a alias
≠import {ComponentFunction as CF} from './MyComponent.vue';≠

// Dynamic Imports
let MyComponent;
import('./MyComponent.vue').then((module) => {
  MyComponent = module.default || module;
});

// Multiline import
≠import {
  ComponentFunctionOne,
  ComponentFunctionTwo,
  ComponentFunctionThree
} from './MyComponent.vue';≠

// Import in the middle of the code
let myVariable = 'Some value';
≠import MyComponentFromMiddle from './MyComponent.vue';≠

// Using dynamic import in the middle of the code
let MyComponent;
someCondition && import('./MyComponent.vue').then((module) => {
  MyComponent = module.default || module;
});

// Corner case: chaining .then() in dynamic import
import('./MyComponent.vue').then((module) => {
  return module.default || module;
}).then((MyComponent) => {
  // ...use MyComponent here...
});

// Corner case: async/await with dynamic import
let MyComponent;

async function getMyComponent() {
  const module = await import('./MyComponent.vue');
  MyComponent = module.default || module;
}

getMyComponent();
</script>