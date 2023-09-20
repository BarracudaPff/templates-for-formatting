<!-- copied cases from SvelteCreateImportTest -->
<script>
    |import {exported} from "./utils";|
</script>
<script>
    |import {
        A,
        B,
    } from "./utils";|
</script>
<script>
    |import {exported} from "./utils";|

    let existingVariable = 5;
</script>
<script>
    import {exported} from "./utils";
    |import {exported} from "./utils";|

    let existingVariable = 5;

    exported;
</script>
<script lang="ts">
    |import {exported} from "./utils";|

    let existingVariable = 5;

    exported
</script>
<script context="module">
    let existingVariable = 5;
</script>
<script>
    |import {exported} from "./utils";|
</script>
<script context="module">
    |import {exported} from "./utils";|

    exported
</script>
<script>
    let existingVariable = 5;
</script>
<script>
    |import Hello from "./Hello.svelte";|
</script>
<Hello />
import Hello from "./Hello.svelte";
export {Hello as RenamedHello};
<script>
  |import Hello, {something} from "./Hello.svelte";|
</script>
<Hello />
{#each list as l}
    <script>
        |import Hello, {something} from "./Hello.svelte";|
    </script>
{/each}