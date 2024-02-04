<template>
    <div class="bg-gray-100 h-screen">
        <div v-if="loading"
            class="bgn h-screen flex-col gap-3 flex justify-center items-center absolute top-0 left-0 w-full">
            <lottie-player src="https://lottie.host/05177640-dbcf-4856-81c6-dfac0ce25b72/14jZ2enCeF.json"
                background="#FFFFFF" speed="1" style="width: 400px; height: 400px" loop autoplay direction="1"
                mode="normal"></lottie-player>
            <p class="text-black text-md">Processing Data please wait.......</p>
            <p class="text-red-400 ">Processing time depends on your dataset size</p>
        </div>
        <div v-if="!result" class="flex items-center justify-center w-full h-screen px-4 py-5 sm:p-6">
            <div class="w-full max-w-sm bg-white shadow-lg rounded-xl">
                <div class="px-4 py-5 sm:p-6">
                    <div class="text-center">
                        <lord-icon src="https://cdn.lordicon.com/wzwygmng.json" trigger="loop" delay="2000"
                            style="width:100px;height:100px">
                        </lord-icon>
                        <p class="mt-5 text-xl font-bold text-gray-900">Upload File</p>

                        <p class="mt-3 text-md font-medium text-gray-500">csv, gzip or zip files allowed</p>
                        <p class="text-red-500 text-xs">{{ filename }}</p>
                        <div class="mt-8">
                            <v-file-input @change="uploadImage" v-show="false" v-model="fileInputImage" id="fileUpload"
                                class="">
                            </v-file-input>
                            <v-btn :loading="loading" color="blue" @click="Trigger" type="button"
                                class="inline-flex items-center justify-center px-6  text-sm font-semibold leading-5 text-indigo-600 transition-all duration-200 bg-indigo-100 border border-transparent rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-600">
                                Select File
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="q-pa-md">
                <q-table title="Table Info" :rows="FormatTable.row" :columns="FormatTable.col" row-key="name" />
            </div>
            <p class="my-4 text-lg underline">Graph</p>
            <img v-if="result.img" :src="`${HOST}/images/${result.img}`" />
        </div>
    </div>

    <!-- <div>
        <h1>Testing UPload Api</h1>
        <img width="100" :src="img" alt="">
        <v-file-input @change="uploadImage" v-model="fileInputImage" id="fileUpload" class="">
        </v-file-input>
        <q-btn @click="Upload">Upload</q-btn>
    </div> -->
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        tab: 'pitch_angle',
        img: "",
        fileInputImage: null,
        filename: '',
        HOST: '',
        loading: false,
        result: false,
        columns: [
            {
                name: 'Time (s)',
                required: true,
                label: 'Time (s)',
                align: 'left',
                field: row => row.name,
                format: val => `${val}`,
                sortable: true
            },
            { name: 'ID (hex)', align: 'center', label: 'ID (hex)', field: 'ID (hex)', sortable: true },
            { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
            { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
            { name: 'protein', label: 'Protein (g)', field: 'protein' },
            { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
            { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
            { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
        ]
    }),
    computed: {
        
        FormatTable() {
            if (!this.result) {
                return {col: [], row:[]}
            }
            let col = [{
                name: 'Time (s)',
                required: true,
                label: 'Time (s)',
                align: 'left',
                field: (row) => row['Time (s)'],
                format: (val) => `${val}`,
                sortable: true,
            },
            {
                name: 'ID (hex)',
                required: true,
                label: 'ID (hex)',
                align: 'left',
                field: (row) => row['ID (hex)'],
                format: (val) => `${val}`,
                sortable: true,
                },
            {
                name: 'D0',
                required: true,
                label: 'D0',
                align: 'left',
                field: (row) => row['D0'],
                format: (val) => `${val}`,
                sortable: true,
                },
            {
                name: 'D1',
                required: true,
                label: 'D1',
                align: 'left',
                field: (row) => row['D1'],
                format: (val) => `${val}`,
                sortable: true,
                },
            {
                name: 'D2',
                required: true,
                label: 'D2',
                align: 'left',
                field: (row) => row['D2'],
                format: (val) => `${val}`,
                sortable: true,
                },
             {
                name: 'D3',
                required: true,
                label: 'D3',
                align: 'left',
                field: (row) => row['D4'],
                format: (val) => `${val}`,
                sortable: true,
                },
            {
                name: 'D4',
                required: true,
                label: 'D4',
                align: 'left',
                field: (row) => row['D4'],
                format: (val) => `${val}`,
                sortable: true,
            },
            ];
             let row = this.result?.pitch_angle;

            return {col, row}
        }
    },
    methods: {
        async uploadImage() {
            try {
                if (this.fileInputImage) {
                     const config = useRuntimeConfig()
                    this.loading = true
                    console.log(this.fileInputImage[0])
                    this.filename = this.fileInputImage[0].name
                    const formData = new FormData()
                    formData.append('file', this.fileInputImage[0]);
                    const response = await axios.post(`${this.HOST}parse`, formData, {
                        headers: formData.getHeaders ? formData.getHeaders() : { 'Content-Type': 'multipart/form-data' }
                    })
                    this.result = response.data
                    console.log(this.result)
                    this.loading = false
                }
            } catch (err) {
                this.loading = false
                console.log(err)
            }
        },
        async Upload() {
            try {
                const formData = new FormData()
                formData.append('file', this.fileInputImage[0]);
                const response = await axios.post(`http://localhost:3001/upload/imgur?filename=${this.fileInputImage[0].name}`, formData, {
                    headers: formData.getHeaders ? formData.getHeaders() : { 'Content-Type': 'multipart/form-data' }
                })
                console.log(response)
                console.log(response.data)
                // const res = await UseFetch.post(`/upload/firebase?filename=${this.fileInputImage[0].name}`, formData)
                // console.log(res)
            } catch (err) {
                console.log(err)
            }
        },
        Trigger() {
            document.getElementById('fileUpload').click();
        },
        fileToBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = function () {
                    const base64String = reader.result.split(',')[1];
                    resolve(base64String);
                };

                reader.onerror = function (error) {
                    reject(error);
                };

                reader.readAsDataURL(file);
            });
        }
    },
    mounted(){
         const config = useRuntimeConfig()
         this.HOST = config.HOST ? config.HOST : 'https://beta-challenge.onrender.com/'
    }
}
</script>

<style>
.bgn {
    background: rgba(255, 255, 255, 0.356);
    backdrop-filter: blur(5px);
    z-index: 100;
}
</style>
