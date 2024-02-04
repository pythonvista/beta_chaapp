<template>
    <div class="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
    

        <section class="relative h-screen pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
            <div class="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
                <img class="hidden w-full lg:block"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png" alt="" />
                <img class="block w-full lg:hidden"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png" alt="" />
            </div>

            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
                <div class="max-w-xl mx-auto text-center">
                    <h1 class="text-4xl font-bold sm:text-6xl">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">BETA Technologies Software Challenge </span>
                    </h1>
                    <p class="mt-5 text-base text-white sm:text-xl">Visual Interface to plot the graph.</p>

                    <a @click="$router.push({path: '/scan'})" title=""
                        class="inline-flex mr-2  items-center px-6 cursor-pointer py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
                        role="button">
                        Get Started
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

     <a href="https://cooperative-bull-cummerbund.cyclic.app/docs" title=""
                            class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
                            role="button">
                            Docs
                            <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>

                   
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>