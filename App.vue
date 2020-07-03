<script>

	export default {
		
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show') 
		},
		onHide: function() {
			console.log('App Hide')
		}
	} 
</script>

<style>
	@import './static/css/uni.css';
	@import "./static/css/common.css";
	@import "./static/css/iconfont.css";
	/* padding:0 20px; */
	/*每个页面公共css */
	.content {  
		padding-top: var(--status-bar-height);
	}
</style>
