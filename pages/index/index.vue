<template>
	<view class="content">
		<view class="page-body">
			<view class="btn-area">
				<!-- <button type="default" @click='urlto'>访问外链</button> -->
				<navigator url="../component/banner/banner" open-type="navigate" hover-class="other-navigator-hover">
					<button type="default">在当前页打开</button>
				</navigator>
				<navigator url="../component/list/list" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">跳转tab页面</button>
				</navigator>
			</view>
		</view>
		<!-- view{这是第$个li}*50 -->
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			urlto() {
				// let urlStr = encodeURI("../component/banner/banner")
				plus.runtime.openURL('http://www.baidu.com')

			}
		},

	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
		/* padding: 20px; */

		background-color: #F1F1F1;
		height: 100%;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.btn-area,
	.page-body {
		height: 100%;
	}
</style>
