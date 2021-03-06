export default {
  name: 'tracking',
  initialize: function(container, application){
    application.inject('service:twitter-api-client',  'tracking', 'service:social-tracking');
    application.inject('service:linkedin-api-client', 'tracking', 'service:social-tracking');
    application.inject('service:facebook-api-client', 'tracking', 'service:social-tracking');
    application.inject('component:email-share', 'tracking', 'service:social-tracking');
  }
};
