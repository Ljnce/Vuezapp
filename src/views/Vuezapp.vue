<template>
  <div id="vuezapp">
    <div class="container-green"></div>
    <div class="container-grey"></div>
    <div class="web-app">
      <div class="left">
        <div class="top-left">
          <img @click="slideDown()" class="avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e13eb438650505.598fa118c8eab.jpg" alt="">
        </div>
        <div class="center-left">
          <div class="notifiche">
            <p class="hide"><span style="color: #FFFFFF; font-size: 35px"><strong>&cross;</strong></span></p>
            <p class="show" style="display:none"><span style="color: #FFFFFF; font-size: 35px"><strong>&#10004;</strong></span></p>
          </div>
          <p class="hide"> <strong @click="notificheOn(); onOff()">Attiva</strong> notiche di nuovi messaggi</p>
          <p class="show" style="display:none"> <strong @click="notificheOff(); offOn()">Disattiva</strong> notiche di nuovi messaggi</p>
          <div class="test" @click="slideUp()">
            <h3>Tony Stark</h3>
            <p>+39 00009900</p>
          </div>
        </div>
        <div class="bottom-left">
          <div class="contacts" v-for="contact in contacts" :key="contact.numero">
            <img :src="contact.img" alt="image" @click="stampMessage()" :data-message="contact.numero">
            <div class="contacts-info">
              <h4 @click="show()"> {{contact.nome}}</h4>
              <p>{{contact.cit}}</p>
            </div>
            <div class="hour">
              <small>{{push()}}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top-right">
          <span @click="back()">&#9776;</span>
        </div>
        <div class="center-right">
          <div class="message-left">
            <div class="new-message" style="border-radius: 10px">
            </div>
          </div>
          <div class="message-right" >
            <div class="risp" >
              <p style="border-radius: 10px; padding: 10px" ></p>
            </div>
          </div>
        </div>
        <div class="bottom-right">
          <input type="text" placeholder="Write a message" v-model="risp">
          <h1 @click="sendMessage(); clearInput()"> &#9993; </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: "vuezapp",
  data () {
    return {
      risp: '',
      timestamp: '',
      contacts: [
    {
        numero: 0,
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1454d038650505.598fa118c9674.jpg',
        nome: 'Tchalla',
        cit: 'A Wakanda 😉'
    },
    {
        numero:1,
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6eb6f38650505.598fa7a08736e.jpg',
        nome: 'Clark',
        cit:  'Metto il vestito e arrivo 😎'
    },
    {
        numero:2,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bdadd38650505.598fa118c9a00.jpg',
        nome: 'Steve Rogers',
        cit: 'Arrivo, mi stavo allenando 😏'
    },
    {
        numero:3,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64838738650505.598fa28916115.png' ,
        nome: 'Peter',
        cit: 'Cosa cosa cosa? Arrivo subito 😍'
    },
    {
        numero:4,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61b37438650505.598fa7a1c8da3.jpg' ,
        nome: 'Wonder Woman',
        cit: 'E cosa ci vuoi fare 😓'
    },
    {
        numero:5,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14bc8b38650505.598fa5eee1e95.jpg' ,
        nome: 'Wolverine',
        cit: 'Passo da Ciclope e arrivo da te 😬'
    },
    {
        numero:6,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eba3f38650505.598fa5ee0d1c1.jpg' ,
        nome: 'Frank Castle',
        cit: 'Dimmi Tony'
    },
    {
        numero:7,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9024fe38650505.598fa11a292af.png' ,
        nome: 'Thor',
        cit: 'No! Ragnarok è in pericolo 😱'
    },
    {
        numero:8,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7691a138650505.598fa119bce1e.jpg' ,
        nome: 'Iron Patriot',
        cit: 'Che figata, arrivo subito! 🤩'
    },
    {
        numero:9,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/592db138650505.598fa11a28ec5.jpg' ,
        nome: 'Thanos',
        cit: 'Iniziate a tremare 😈'
    }
]
    }
  },
  methods: {
    // Show message
    show() {
      $('.right').css("display", "block");
      $(".left").css("display", "none");
    },
    // Back list
    back() {
      $('.right').css("display", "none");
      $('.left').css("display", "block");
    },
    // Notifiche on
    onOff() {
      $('.show').css("display", "block");
      $(".hide").css("display", "none");
    },
    // Notifiche off
    offOn() {
      $('.show').css("display", "none");
      $(".hide").css("display", "block");
    },
    // Slide down
    slideDown() {
      return $('.test').slideDown();
    },
    //Slide info up
    slideUp() {
      return $('.test').slideUp();
    },
    // Invio messaggio da input
    sendMessage() {
      return $('.risp p').text(this.risp).css('background-color', '#b3ffb3');
    },
    // Azzero valore input
    clearInput() {
      return $('input').val('');
    },
    // Attivo notifiche
    notificheOn() {
      alert('Notiche Attivate');
      $('.notifiche .hide').css('dispay', 'none');
    },
    // Disattivo notifiche
    notificheOff() {
      alert('Notiche Disattivate');
    },
    // Stampo i messaggi relativi
    stampMessage() {
      var lista = event.target.attributes["data-message"].value;
      console.log(lista);
      var array = [
        {
            text: 'A Wakanda 😉',
        },
        {
            text: 'Metto il vestito e arrivo 😎',
        },
        {
            text: 'Arrivo, mi stavo allenando 😏',
        },
        {
            text: 'Cosa cosa cosa? Arrivo subito 😍',
        },
        {
            text: 'E cosa ci vuoi fare 😓',
        },
        {
            text: 'Passo da Ciclope e arrivo da te 😬',
        },
        {
            text: 'Dimmi Tony',
        },
        {
            text: 'No! Ragnarok è in pericolo 😱',
        },
        {
            text: 'Che figata, arrivo subito! 🤩',
        },
        {
            text: 'Iniziate a tremare 😈',
        }
      ];

      for (var i = 0; i < array.length; i++) {
        var singolo = array[i];
        var text = singolo.text;
        if (lista == i) {
          $('.new-message').append("<p>" + text + "</p>");
        }
      }
    },
    // Cancello messaggio
    // clearMessage() {
    //   return $('.new-message p').css('background-color', "rgba(0,0,0,0)")
    // },
    // Orario
    push(){
      var today = new Date();
      var date = today.getDate()+'-'+(today.getMonth()+1);
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date +' '+ time;
      return this.timestamp = dateTime;
    }
  }
}

</script>

<style lang="scss">

  #vuezapp {
    .container-green {
      height: 100px;
      width: 100vw;
      background-color: #00e6ac;
    }
    .container-grey {
      height: calc(100vh - 100px);
      width: 100vw;
      background-color: #e6e6e6;
    }
    .web-app {
      height: 90%;
      width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .left {
        height: 100%;
        width: 30%;
        float: left;
        .top-left {
          height: 100px;
          background-color: #ededed;
          border-right: 1px solid white;
          img {
            height: 70px;
            border-radius: 100%;
            display: flex;
            justify-content: flex-start;
            padding-left: 10px;
            padding-top:10px;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .center-left {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #80e5ff;
          position: relative;
          p > strong {
            &:hover {
              cursor: pointer;
              font-size: 18px;
            }
          }
          span {
            margin-right: 10px;
          }
          .test {
            width: 100%;
            height: 100px;
            background-color: red;
            position: absolute;
            display: none;
          }
        }
        .bottom-left {
          height: calc(100% - 200px);
          background-color: #FFFFFF;
          overflow-y: auto;
          .contacts {
            height: 120px;
            display: flex;
            align-items: center;
            flex-direction: row;
            border-bottom: 1px solid #ededed;
            &:hover {
              background-color: #ededed;
              cursor: pointer;
            }
            img {
              height: 70px;
              border-radius: 100%;
              margin-left: 5px;
            }
            .contacts-info {
              display: flex;
              flex-direction: column;
              text-align: left;
              width: 200px;
              h4 {
                margin-bottom: -5px;
              }
            }
            .hour {
              width: 100px;
              display: flex;
              justify-content: flex-end;
              margin-right: 8px;
            }
          }
        }
      }
      .right {
        height: 100%;
        width: 70%;
        float: right;
        .top-right {
          height: 100px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          background-color: #ededed;
          span {
            font-size: 30px;
            margin-right: 20px;
          }
        }
        .center-right {
          height: calc(100% - 200px);
          background-image: url('https://www.itl.cat/pngfile/big/7-74810_iron-ultra-hd-iron-man.jpg');
          background-position:center;
          opacity: 0.5;
          overflow-y: auto;
          background-size: cover;
          .message-left {
            width: 50%;
            float:left;
            .new-message {
              width: 80%;
              padding: 7px;
              margin-left: 10px;
              margin-top: 10px;
              background-color: #b3ffb3;
            }
          }
          .message-right {
            width: 50%;
            float:right;
            .risp {
              width: 80%;
              float:right;
              margin-right: 10px;
              margin-top: 80px;
              border-radius: 5px;
            }
          }
        }
        .bottom-right {
          height: 100px;
          background-color: #990000;
          display: flex;
          align-items: center;
          justify-content: center;
          input {
            height: 30px;
            width: 80%;
            border-radius: 5px;
            padding-left: 10px;
          }
          h1 {
            font-size: 50px;
            margin-left: 10px;
            color: white;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    #vuezapp {
      .container-green {
        height: 100px;
        width: 100vw;
        display: none;
      }
      .container-grey {
        height: calc(100vh - 100px);
        width: 100vw;
        background-color: #e6e6e6;
        display: none;
      }
      .web-app {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .left {
          height: 100%;
          width: 100%;
          float: left;
          .top-left {
            height: 100px;
            background-color: #ededed;
            border-right: 1px solid white;
            img {
              height: 70px;
              border-radius: 100%;
              display: flex;
              justify-content: flex-start;
              padding-left: 10px;
              padding-top:10px;
            }
          }
          .center-left {
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #80e5ff;
            p > strong {
              &:hover {
                cursor: pointer;
              }
            }
            span {
              margin-right: 10px;
            }
          }
          .bottom-left {
            height: calc(100% - 180px);
            background-color: #FFFFFF;
            overflow-y: auto;
            .contacts {
              height: 120px;
              display: flex;
              align-items: center;
              flex-direction: row;
              border-bottom: 1px solid #ededed;
              img {
                height: 70px;
              }
              .contacts-info {
                display: flex;
                flex-direction: column;
                text-align: left;
                width: 200px;
                h4 {
                  margin-bottom: -5px;
                }
              }
              .hour {
                width: 100px;
                display: flex;
                justify-content: flex-end;
                margin-right: 8px;
              }
            }
          }
        }
        .right {
          height: 100%;
          width: 100%;
          float: right;
          display: none;
          .top-right {
            height: 100px;
            background-color: #ededed;
          }
          .center-right {
            height: calc(100% - 200px);
            background-image: url('https://www.itl.cat/pngfile/big/7-74810_iron-ultra-hd-iron-man.jpg');
            background-position:center;
            opacity: 0.5;
            overflow-y: auto;
            background-size: cover;
            .message-left {
              width: 50%;
              float:left;
              .new-message {
                width: 80%;
                padding: 7px;
                margin-left: 10px;
                margin-top: 10px;
                background-color: #b3ffb3;
              }
            }
            .message-right {
              width: 50%;
              float:right;
              .risp {
                width: 80%;
                float:right;
                margin-right: 10px;
                margin-top: 80px;
                border-radius: 5px;
              }
            }
          }
          .bottom-right {
            height: 100px;
            background-color: #990000;
            display: flex;
            align-items: center;
            justify-content: center;
            input {
              height: 30px;
              width: 80%;
              border-radius: 5px;
            }
            h1 {
              font-size: 40px;
              margin-left: 10px;
              color: white;
              margin-top: 12px;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

</style>
