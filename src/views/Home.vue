<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="page-title">
                    <span class="subtitle">Dashboard</span>
                    <h3>My Dashboard</h3>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div>
                    <b-card>
                        <b-card-header>
                            <h6>Pie Chart - Largest cities in EU</h6>
                        </b-card-header>
                        <b-card-body>
                            <pie-chart :data="chartData"></pie-chart>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
            <b-col>
                <div>
                    <b-card>
                        <b-card-header>
                            <h6>Bar Chart - Largest cities in EU</h6>
                        </b-card-header>
                        <b-card-body>
                            <bar-chart :data="chartData" xtitle="Population"></bar-chart>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <div class="dashboard-table">
                    <b-card>
                        <b-card-header>
                            <h6>Table - Largest cities in EU</h6>
                        </b-card-header>
                        <b-card-body>
                            <div class="table-container">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="col1">Id</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            <th>Population</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="user in users" v-bind:key="user.id">
                                            <td>
                                                <input type="text" name="id" v-model="user.id" class="form-control1" />
                                            </td>
                                            <td>
                                                <input type="text" name="country" v-model="user.country" class="form-control1" />
                                            </td>
                                            <td>
                                                <input type="text" name="city" v-model="user.city" class="form-control1" />
                                            </td>
                                            <td>
                                                <input type="text" name="population" v-model="user.population" class="form-control1" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
        </b-row>

         <b-row>
            <b-col>
                <b-card>
                    <div>
                        <zingchart 
                            ref="myChart" 
                            :data="chartConfig" 
                        >
                        </zingchart>

                        <div class="edit-data-box">
                            <div>
                                <label for="edit-data">Edit Data</label>
                                <input type="text" v-model="values" id="edit-data" class="form-control"/>
                            </div>
                        </div>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
import zingchartVue from 'zingchart-vue';

    export default {
        name: 'Home',
        components: {
            zingchart: zingchartVue,
        },
        data() {
            return {
                chartData: {
                    'London': 9126366,
                    'Berlin': 3748148,
                    'Madrid': 3223334,
                    'Rome': 2857321,
                    'Paris': 2140526
                },
                values: [30000,80000,75000,50000,45000,55000,73000,64000],

                users: [
                    {   
                        "id": 1,
                        "city": "London",
                        "country": "UK",
                        "population": "9,126,366"
                    },
                    
                    {
                        "id": 2,
                        "city": "Berlin",
                        "country": "Germany",
                        "population": "3,748,148"
                    },
                    {
                        "id": 3,
                        "city": "Madrid",
                        "country": "Spain",
                        "population": "3,223,334"
                    },
                    { 
                        "id": 4,
                        "city": "Rome",
                        "country": "Italy",
                        "population": "2,857,321"
                    },
                    {
                        "id": 5,
                        "city": "Paris",
                        "country": "France",
                        "population": "2,140,526"
                    }
                ]
            }
        },

        computed: {
            chartConfig() {
                return {
                    type: 'bar', 
                    legend: {},
                    tooltip: {
                        negation: "currency",
                        text: "£%v",
                        "thousands-separator": ","
                    },
                    'scale-x': {
                        step: "month",
                        minValue: firstDayOfTheCurrentYear(),
                        label: {
                            text: "Month/Year"
                        },
                        transform: {
                            type: "date",
                            all: "%m/%y"
                        }
                    },
                    'scale-y': {
                        label: { 
                            text: "Amount in GBP",
                        },
                        short:true,
                        shortUnit: 'K',
                    },
                    series: [
                        {
                            values: this.values,
                            'background-color': "#6666FF",
                            text: 'Actual'
                        }
                    ],
                    title: {
                        text: 'Actual Revenue',
                        fontSize: 16,
                        color: "#34495e" 
                    }
                } 
            }
        } 
    }

function firstDayOfTheCurrentYear() {
  const today = new Date();
  return new Date("1/1/" + today.getFullYear()).getTime();
}
</script>

<style lang="scss" scoped>

.dashboard-table {
    .card {
        .card-body {
            .card-body {
                @media only screen and (max-width: 575px) {
                    padding: 15px 0 !important;
                }

                .table-container {
                    overflow-x: auto;
                    
                    .table {
                        color: #34495e;

                        thead {
                            text-align: left;

                            tr th {
                                padding: 0.75rem 0.75rem 0.75rem 1.25rem;

                                @media only screen and (max-width: 575px) {
                                    padding: 0.75rem;
                                }
                            }

                            tr th.col1 {
                                width: 90px;

                                @media only screen and (max-width: 575px) {
                                    width: 50px;
                                }
                            }
                        }

                        tbody {
                            tr {
                                td {
                                    padding: 0.75rem 0.75rem 0.75rem 1.25rem;

                                    @media only screen and (max-width: 575px) {
                                        padding: 0.75rem;
                                    }
                                }
                            }
                        }
                    }

                    .form-control1 {
                        color: #34495e;
                        width: 100%;
                        border: none;
                    }
                }

            }
        }
    }
}

.edit-data-box {
    margin: 20px auto 50px;
    text-align: center;
    max-width: 420px;
    width: 100%;

    div {
        label {
            font-weight: 500;
        }

        .form-control {
            width: 100%;   
        }
    }
}
</style>