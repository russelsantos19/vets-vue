<template>
  <div id='app'>
    <!-- <nav>
      <router-link to="/">Sign Up </router-link>|
      <router-link to="/log-in">Sign In</router-link>
    </nav>
    <router-view></router-view> -->
    <!-- <sideMenu /> -->
    <div class="side-menu-narrow">
      <span id="openNavButton" @click="openNav()">&#9776;</span>
      <i :style="[(selectedTab == '') && hightlightTab]" class="material-icons homeTab" @click="selectedTab = ''; closeNav()" href="javascript:void(0)">home</i>
      <i :style="[(selectedTab == 'appointments') && hightlightTab]" class="material-icons" @click="selectedTab = 'appointments'; closeNav()" href="javascript:void(0)">date_range</i>
      <i :style="[(selectedTab == 'patients') && hightlightTab]" class="material-icons" @click="selectedTab = 'patients'; closeNav()" href="javascript:void(0)">local_hospital</i>
      <i :style="[(selectedTab == 'clients') && hightlightTab]" class="material-icons" @click="selectedTab = 'clients'; closeNav()" href="javascript:void(0)">account_box</i>
      <i :style="[(selectedTab == 'suppliers') && hightlightTab]" class="material-icons" @click="selectedTab = 'suppliers'; closeNav()" href="javascript:void(0)">local_shipping</i>
      <i :style="[(selectedTab == 'inventory') && hightlightTab]" class="material-icons" @click="selectedTab = 'inventory'; closeNav()" href="javascript:void(0)">assignment</i>
      <i :style="[(selectedTab == 'billing') && hightlightTab]" class="material-icons" @click="selectedTab = 'billing'; closeNav()" href="javascript:void(0)">attach_money</i>
      <i :style="[(selectedTab == 'reports') && hightlightTab]" class="material-icons" @click="selectedTab = 'reports'; closeNav()" href="javascript:void(0)">analytics</i>
      <i :style="[(selectedTab == 'Sign In' || selectedTab == 'Sign Up') && hightlightTab]" class="material-icons" @click="selectedTab = 'Sign In'; closeNav()" href="javascript:void(0)">login</i>
    </div>
    <div :style="{ width: navWidth + 'px', opacity: backgroundOpacityNav }" class="side-menu">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&#9776;</a>
      <a :style="[(selectedTab == '') && hightlightTab]" class="homeTab" @click="selectedTab = ''; closeNav()" href="javascript:void(0)">Home 
        <i :style="[(selectedTab == '') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
      <a :style="[(selectedTab == 'appointments') && hightlightTab]" @click="selectedTab = 'appointments'; closeNav()" href="javascript:void(0)">Appointments 
        <i :style="[(selectedTab == 'appointments') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
      <a :style="[(selectedTab == 'patients') && hightlightTab]" @click="selectedTab = 'patients'; closeNav()" href="javascript:void(0)">Patients 
        <i :style="[(selectedTab == 'patients') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
      <a :style="[(selectedTab == 'clients') && hightlightTab]" @click="selectedTab = 'clients'; closeNav()" href="javascript:void(0)">Clients 
        <i :style="[(selectedTab == 'clients') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
      <a :style="[(selectedTab == 'suppliers') && hightlightTab]" @click="selectedTab = 'suppliers'; closeNav()" href="javascript:void(0)">Suppliers 
        <i :style="[(selectedTab == 'suppliers') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>  
      <a :style="[(selectedTab == 'inventory') && hightlightTab]" @click="selectedTab = 'inventory'; closeNav()" href="javascript:void(0)">Inventory 
        <i :style="[(selectedTab == 'inventory') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
      <a :style="[(selectedTab == 'billing') && hightlightTab]" @click="selectedTab = 'billing'; closeNav()" href="javascript:void(0)">Billing 
        <i :style="[(selectedTab == 'billing') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
      <a :style="[(selectedTab == 'reports') && hightlightTab]" @click="selectedTab = 'reports'; closeNav()" href="javascript:void(0)">Reports 
        <i :style="[(selectedTab == 'reports') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
      <a :style="[(selectedTab == 'Sign In' || selectedTab == 'Sign Up') && hightlightTab]" @click="selectedTab = 'Sign In'; closeNav()" href="javascript:void(0)">Sign In 
        <i :style="[(selectedTab == 'Sign In') && showArrow]" class="material-icons arrowRight">{{ arrowIcon }}</i></a>
    </div>
    <div @click="closeNav()" id="contents" :style="{ opacity: backgroundOpacityContents }">
      <div class="tabContainer">
        <!-- <span class="tab"
              :class="{ activeTab: selectedTab === tab}"
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectedTab = tab">
              {{ tab }}</span> -->
              
          <!-- <span class="tab" @click="selectedTab = 'Sign In'" 
                            v-show="selectedTab == ''">Sign In</span> -->
      </div>
      <home v-show="selectedTab === ''"/>
      <appointments v-show="selectedTab === 'appointments'"/>
      <patients v-show="selectedTab === 'patients'"/>
      <clients v-show="selectedTab === 'clients'"/>
      <suppliers v-show="selectedTab === 'suppliers'"/>
      <inventory v-show="selectedTab === 'inventory'"/>
      <billing v-show="selectedTab === 'billing'"/>
      <reports v-show="selectedTab === 'reports'"/>
      <logIn @goToSignUp="selectedTab = 'Sign Up'" @closeWindow="selectedTab = ''"
              v-show="selectedTab === 'Sign In'"/>
      <signUp @goToSignIn="selectedTab = 'Sign In'" @closeWindow="selectedTab = ''"
              v-show="selectedTab === 'Sign Up'"/>
    </div>
  </div>
</template>

<script>
import signUp from './components/sign-up.vue';
import logIn from './components/log-in.vue';
import home from './components/home.vue';
import appointments from './components/appointments.vue';
import patients from './components/patients.vue';
import clients from './components/clients.vue';
import suppliers from './components/suppliers.vue';
import inventory from './components/inventory.vue';
import billing from './components/billing.vue';
import reports from './components/reports.vue';
// import sideMenu from './components/side-menu.vue';

export default {
  name: 'App',
  components: {
    signUp,
    logIn,
    home,
    appointments,
    patients,
    clients,
    suppliers,
    inventory,
    billing,
    reports,
    // sideMenu
  },
  data() {
    return {
      // tabs: ['Sign In', 'Sign Up'],
      selectedTab: '',
      navWidth: 0,
      backgroundOpacityContents: '1',
      backgroundOpacityNav: '',
      hightlightTab: {
        // backgroundColor: '#4e4e4e',
        backgroundColor: 'rgb(35, 35, 35)',
        color: 'white',
        fontWeight: 'bold',
        // paddingRight: '5px',
      },
      showArrow: {
        display: 'inline',
      },
      arrowIcon: 'arrow_left',
    }
  },
  methods: {
    openNav() {
      this.navWidth = 220;
      this.backgroundOpacityContents = .7;
    },
    closeNav() {
      if (this.navWidth == 220) {
        this.navWidth = 0;
        this.backgroundOpacityContents = 1;
      }
    },

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import './assets/stylesheet/app.css';
</style>
