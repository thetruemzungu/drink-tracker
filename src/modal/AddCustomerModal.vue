<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
        <button type="button" class="btn-close" @click="close"> x </button>
        </header>
        <section class="modal-body">
          <h1> 
          Enter your information below!
          </h1>
          <br />
          <slot name="body">
            <h3>
            <div class="form">
              <div class="row">
                <div class="col-sm-2"></div>
                <div class= "col-sm-4">
                First Name*: 
                </div>
                <div class= "col-sm-2">
                <input v-model="firstName" required="true">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2"></div>
                <div class= "col-sm-4">
                Middle Name*: 
                </div>
                <div class= "col-sm-4">
                <input v-model="middleName" >
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2"></div>
                <div class= "col-sm-4">
                Last Name*: 
                </div>
                <div class= "col-sm-2">
                <input v-model="lastName" required="true">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2"></div>
                <div class= "col-sm-4">
                initials Name*: 
                </div>
                <div class= "col-sm-3">
                <input v-model="initials" required="true" maxlength="3">
                </div>
              </div>
            </div>
            </h3>
          </slot>
        </section>
        <button
          type="button"
          class="button"
          @click="close"
        >
          Close me!
      </button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    data() {
      return{
        firstName: '',
        middleName: '',
        lastName: '',
        initials: ''
      }
    },
    methods: {
      close() {
        this.$emit('close');
        this.addCustomer()
        window.location.reload()
      },
      addCustomer() {
        console.log(this.firstName + ":" + this.middleName + ":" + this.lastName + ":" + this.initials)
        //update the user list
      }
    },
  };
</script>


<style scoped>
  .form{
    text-align: left;
  }
  .modal-fade-enter,
    .modal-fade-leave-active {
      opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    left: 10%;
    top: 10%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .button{
    border-radius: 25px;
    font-size: 1.5em;
    color: #E1F2FE;
    margin: 0 auto .5em;
    background-color: #2B4162;
    padding: .75em;
    width: 25%;
  }
</style>