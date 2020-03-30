<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="page-title">
                    <span class="subtitle">Overview</span>
                    <h3>Data Editor</h3>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="csv-box">
                    <b-card>
                        <div>
                            <h4>CSV Import</h4>
                        </div>
                        <b-card-body>
                            <div class="form-group text-left">
                                <label for="csv_file" class="control-label">Upload CSV file</label>
                                <div>
                                    <input 
                                        type="file" 
                                        id="csv_file" 
                                        name="csv_file" 
                                        class="choose-file-btn" 
                                        @change="loadCSV($event)"
                                    >
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <div>
                    <b-card>
                        
                        <b-card-body>
                            <div class="table-container">
                                <table v-if="parse_csv" class="table table-bordered">
                                    <thead class="thead">
                                        <tr>
                                            <th v-for="key in parse_header" v-bind:key="key.id" scope="col">
                                                {{ key | capitalize }}
                                            </th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                        <tr v-for="csv in parse_csv" v-bind:key="csv.id">
                                            <td v-for="key in parse_header" v-bind:key="key.id">
                                                <input type="text" name="test" v-model="csv[key]" class="form-control1" />
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
                <div class="btn-box">
                    <button type="button" class="btn btn-light">Table to JSON</button>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Page1',

    data() {
        return {
            channel_name: '',
            channel_fields: [],
            channel_entries: [],
            parse_header: [],
            parse_csv: []
        };
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        csvJSON(csv){
            var vm = this
            var lines = csv.split("\n")
            var result = []
            var headers = lines[0].split(",")
            vm.parse_header = lines[0].split(",") 
      
            lines.map(function(line, indexLine){
                if (indexLine < 1) return // Jump header line
                
                    var obj = {}
                    var currentline = line.split(",")
                    
                    headers.map(function(header, indexHeader){
                        obj[header] = currentline[indexHeader]
                    })
                
                result.push(obj)
        })
      
            result.pop() // remove the last item because undefined values
        
            return result
        },

        loadCSV(e) {
            var vm = this
            if (window.FileReader) {
                var reader = new FileReader();
                reader.readAsText(e.target.files[0]);

                // Handle errors load
                reader.onload = function(event) {
                    var csv = event.target.result;
                    vm.parse_csv = vm.csvJSON(csv);
                    document.querySelector('.btn-box').style.display = "block";
                    
                };
                reader.onerror = function(evt) {
                    if(evt.target.error.name == "NotReadableError") {
                        alert("Can't read file !");
                    }
                };
            } else {
                alert('FileReader are not supported in this browser.');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.csv-box {
    .card {
        .card-body {
            div {
                h4 {
                    margin: 10px auto 20px;

                    @media only screen and (max-width: 575px) {
                        margin: 10px auto;
                    }
                }
            }

            .card-body {
                .form-group {
                    .control-label {
                        font-size: 16px;
                        font-weight: 500;
                        margin-bottom: 15px;
                    }

                    div {
                        .choose-file-btn {
                            @media (max-width: 1024px) {
                                border: 1px solid #dee2e6;
                                padding: 3px 0;
                            }

                            @media only screen and (max-width: 575px) {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
}

.table-container {
    width: 100%;
    margin: 0 auto;
    overflow-x: auto;
    color: #34495e;
    
    .table {
        text-align: left;
        margin: 0;

        thead {
            tr {
                th {
                    color: #34495e;
                }
            }
        }

        tbody {
            tr {
                td {
                    input {
                        border: none;
                        color: #34495e;
                    }
                }
            }
        }
    }
}

.btn-box {
    display: none;
}
   
</style>