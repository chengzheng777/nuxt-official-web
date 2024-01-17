<!--
 * @Description: 
 * @Author: chengzheng
 * @Date: 2023-11-16 17:52:30
 * @Editors: chengzheng
 * @LastEditTime: 2024-01-17 14:04:03
-->
<script setup>
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <nav class="border-b border-slate-200 px-5 py-5 flex items-center justify-between">
        <div class="flex items-center justify-between">
            <img
                class="w-[50px] h-[50px] border-salte-300 rounded-full inline-block"
                src="~/assets/01.png"
                alt="avatar"
            />
            <h1 class="text-2xl font-bold">
               房讯通
            </h1>
        </div>
        <div class="flex items-center justify-between">
            <ClientOnly>
                <UButton
                    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                    color="gray"
                    variant="ghost"
                    aria-label="Theme"
                    @click="isDark = !isDark"
                />

                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly>

        </div>
    </nav>
</template>