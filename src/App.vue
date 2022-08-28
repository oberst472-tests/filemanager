<script setup lang="ts">
import SectionFileManager from '@/components/sections/section-file-manager/index.vue';
import { onMounted } from 'vue';
onMounted(async () => {
  document.cookie = "REMEMBERME=QXBwXEVudGl0eVxVc2VyOmRHVnpkQzF0WVdsc01FQjBaWE4wTG1OdmJRPT06MTY2MjMyMzk0OTppVGFaUy9xTDdJTkVUK0RJZTNQWnRISWw2YkNVVkpmcE5BaER5WWVuang2czhGL3ZxbWdsYTYzbFpRRUthbzFRdzBKUEhFeWlDblQwQ0p5cXc4amEwQT09OmVmM2I4NDA4ZTQ2OGZiZjk5OThlNTI5NTkwZGYwNDZiN2JlMzBmZmUzZjcxZjMxNjVlOTUwYWIwMmJiZDI3M2Q%3D"
  const res = await fetch('https://demo-fklvc3a-to7bfmgj5m5m2.de-2.platformsh.site/api/folders')
  const data = await res.json()
  console.log(data);
})
</script>

<template>
    <SectionFileManager class="app-file-manager"/>
</template>

<style lang="scss">
.app-file-manager {
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 600px;
}
</style>
