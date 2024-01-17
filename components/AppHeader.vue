<!--
 * @Description: 
 * @Author: chengzheng
 * @Date: 2023-11-16 17:52:30
 * @Editors: chengzheng
 * @LastEditTime: 2024-01-17 14:12:02
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
        <div class="flex items-center justify-between ">
            <img
                class="w-[120] h-[50px] inline-block px-5 "
                src="~/assets/fxt.png"
                alt="logo"
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