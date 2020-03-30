<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="page-title">
                    <span class="subtitle">Overview</span>
                    <h3>Smart Search</h3>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div>
                    <b-card>
                        <b-card-header>
                            <h6>List of People</h6>
                        </b-card-header>
                        <div class="search-bar">
                            <b-form-input type="text" v-model="search" placeholder="Search name.."></b-form-input>
                        </div>
                        <b-card-body>
                            <div role="tablist">
                                <paginate name="users" :list="filteredList" class="paginate-list" :per="4" :key="search">
                                    <b-card 
                                        no-body class="mb-1" 
                                        v-for="user in paginated('users')" 
                                        :key="user.id"
                                    >
                                        <b-card-header header-tag="header" class="p-1" role="tab">
                                            <b-button block href="#" v-b-toggle="`accordion-${user.id}`" variant="info1">
                                                {{ user.id}}. {{ user.name }}
                                            </b-button>
                                        </b-card-header>
                                        <b-collapse :id="`accordion-${user.id}`" accordion="my-accordion" role="tabpanel">
                                            <b-card-body>
                                                <b-card-text><b>Username:</b> {{ user.username }}</b-card-text>
                                                <b-card-text><b>Email:</b> {{ user.email }}</b-card-text>
                                                <b-card-text>
                                                    <b>Address:</b> {{ user.address.suite }} {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}
                                                </b-card-text>
                                                <b-card-text><b>Phone:</b> {{ user.phone }}</b-card-text>
                                                <b-card-text><b>Website:</b> {{ user.website }}</b-card-text>
                                                <b-card-text><b>Company:</b> {{ user.company.name }}</b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </paginate>

                                <paginate-links
                                    for="users"
                                    :async="true"
                                    :show-step-links="true"
                                    :step-links="{
                                        next: 'Next',
                                        prev: 'Previous'
                                    }"
                                    :classes="{
                                        ul: 'pagination',
                                        'ul > li': 'page-item',
                                        'ul > li > a': 'page-link'
                                    }"
                                >
                                </paginate-links>
                            </div>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
        </b-row>
       
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            search: '',
            users: [],
            errors: [],
            paginate: ['users']
        }
    },
    created() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.users = response.data
            })
                .catch(e => {
                this.errors.push(e)
            })
    },
    computed: {
        filteredList() {
            return this.users.filter(user => {
                return user.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },
    }
    
}
</script>

<style lang="scss" scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");

.card {

    .search-bar {
        margin: 30px 20px 20px;

        @media only screen and (max-width: 575px) {
            margin: 30px auto 20px;
        }

        .form-control {
            border-color: #ddd;
            height: calc(1.8em + 0.75rem + 2px);
            color: #34495e;
        }
    }

    .card.mb-1 {
        background: #fff;
        border: 1px solid #eee !important;
        text-align: left;
        margin-bottom: 0.75rem !important;
        box-shadow: none !important;

        .card-header.p-1 {
            background: #fff;
            border-bottom: 1px solid #eee;
            margin: 0 !important;

            a {
                text-align: left;
                color: #34495e;
                font-weight: 500;
            }
        }

        .btn-info1 {
            background: #fff;
        }

        .card-header.p-1 > a:before {
            font-family: 'FontAwesome';  
            content: "\f068";
            float: right; 
        }
        .card-header.p-1 > a.collapsed:before {
            content: "\f067"; 
            float: right !important;
        }

        .collapse.show {
            .card-body {
                @media only screen and (max-width: 575px) {
                    padding-right: 15px !important;
                    padding-left: 15px !important;
                }
                
            }
        }
    }

    .pagination {
        margin-top: 50px;
        justify-content: center;

        .page-link {
            cursor: pointer;
        }
    }

    .page-item,
    a.page-link {
        cursor: pointer !important;
    }
}

</style>