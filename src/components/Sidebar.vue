<template>
  <BootstrapSidebar
    :initial-show="initialShow"
    :links="links"
    :header="header"
    :fa="true"
    @sidebarChanged="onSidebarChanged"
  >
    <template v-slot:navbar>
      <b-navbar
          id="mainNavbar"
          toggleable="sm"
          type="light"
          variant="light"
          fixed="top"
      >
        <b-navbar-nav>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-nav-item>
                <router-link to="/">Dashboard</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/page1">Data Editor</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/page2">Smart Search</router-link>
            </b-nav-item>
          </b-collapse>
        </b-navbar-nav>
      </b-navbar>
    </template>

    <template v-slot:content>
      <b-container style="margin-top: 40px">
      <router-view />
      </b-container>
    </template>
  </BootstrapSidebar>
</template>

<script>
import BootstrapSidebar from 'vue-bootstrap-sidebar'

export default {
  name: 'Sidebar',
  components: {
    BootstrapSidebar
  },
  data () {
    return {
      initialShow: true,
      header: '<h3><i class="fab fa-vuejs"></i> Vue</h3>',
      links: [
        { name: 'Dashboard', href: { path: '/' }, faIcon: ['fas', 'tachometer-alt'] },
        { name: 'Data Editor', href: { path: '/page1' }, faIcon: 'table' },
        { name: 'Smart Search', href: { path: '/page2' }, faIcon: 'search' }
      ]
    }
  },
  methods: {
    onSidebarChanged () {
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import 'node_modules/vue-bootstrap-sidebar/src/scss/default-theme';

.vue-bootstrap-sidebar.default-theme {
  min-width: 230px;
  max-width: 230px;
  background: #fff;
  color: #34495e;

  .sidebar-header {
    background-color: #fff;
    color: #34495e;
    margin-bottom: 0;

    h3 {
      text-align: left;
      font-size: 24px;
      margin-top: 3px;
      margin-bottom: 5px;
      margin-left: 5px;
      color: #34495e;
    }
  }

  .list-group.items-wrapper {

    .list-group-item {
      border-bottom: 1px solid #e1e5eb;

      .sidebar-menu-item {
        background-color: #fff;
        color: #34495e;
        border: none;
      }

      .btn.btn.sidebar-menu-item.router-link-active.btn-info,
      .btn.btn.sidebar-menu-item.btn-info.btn-block {
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 15px;
      }

      .btn.btn.sidebar-menu-item.router-link-exact-active.router-link-active.btn-info,
      .btn.btn.sidebar-menu-item.router-link-exact-active.router-link-active.btn-info:active:focus{
        padding-top: 12px;
        padding-bottom: 12px;
        box-shadow: inset 0.1875rem 0 0 #007bff;
        background-color: #fbfbfb;
        color: #007bff;
      }

      .btn.btn.sidebar-menu-item.btn-info:hover,
      .btn.btn.sidebar-menu-item.router-link-active.btn-info.btn-block.rounded-0:focus,
      .btn-info:not(:disabled):not(.disabled):active:focus, 
      .btn-info:not(:disabled):not(.disabled).active:focus, 
      .show > .btn-info.dropdown-toggle:focus {
        box-shadow: inset 0.1875rem 0 0 #007bff !important;
        background-color: #fbfbfb;
        color: #007bff;
      }
    }
  }

  .sidebar-button.default-theme.cross.visible {
    left: 180px;
    background-color: rgba(255, 255, 255, 0);
    color: #34495e;
  }
  .sidebar-button.default-theme.hidden {
    margin-left: 15px;
  
    .bar1, 
    .bar2, 
    .bar3 {
      width: 23px;
      height: 3px;
      background-color: #34495e;
    }
  }
}

#navbar.sidebar > nav.navbar {
  padding-left: 250px;
  box-shadow: 0 0.125rem 0.625rem rgba(90,97,105,.12);

  @media only screen and (max-width: 575px) {
    justify-content: flex-end !important;
  }

  .navbar-nav {

    @media only screen and (max-width: 575px) {
      display: block;
      text-align: right;
      padding-right: 0;
    }

    .navbar-toggler {
      padding: 0.25rem 0.75rem;
      font-size: 1.25rem;
      line-height: 1;
      background-color: transparent;
      border: 1px solid #e1e5eb;
      border-radius: 0.25rem;
      width: 54px !important;
    }

    .navbar-collapse {
      @media only screen and (max-width: 575px) {
        margin-top: 13px;
      }

      .nav-item {

        a.nav-link {
          color: #34495e;
          padding-right: 0.75rem !important;
          padding-left: 0.75rem !important;

          &:hover {
            color: #007bff;
          }
          
          a {
            color: #34495e;

            &:hover {
              color: #007bff;
            }
          }

          a.router-link-exact-active.router-link-active {
            color: #007bff;
          }
        }
      }
      
    }
  }
}

#navbar.no-sidebar > nav.navbar {
  box-shadow: 0 0.125rem 0.625rem rgba(90,97,105,.12);

  @media only screen and (max-width: 575px) {
    justify-content: flex-end !important;
  }

  .navbar-collapse {
    @media only screen and (max-width: 575px) {
      padding-top: 10px;
      text-align: right;
    }

    .nav-item {

      a.nav-link {
        color: #34495e;
        padding-right: 0.75rem !important;
        padding-left: 0.75rem !important;

        &:hover {
          color: #007bff;
        }
        
        a {
          color: #34495e;

          &:hover {
            color: #007bff;
          }
        }

        a.router-link-exact-active.router-link-active {
          color: #007bff;
        }
      }
    }
    
  }
}

#content {
  padding-bottom: 20px;
}
#content.sidebar {
  margin-left: 230px;
}

</style>