<template>
	<view class="content">
		<view class="title">
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
			</view>
			<input type="text" placeholder="请输入你要搜的商品" confirm-type="search">
		</view>
		<!-- banner -->
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" circular=true :interval="interval"
				 :duration="duration">
					<swiper-item>
						<view class="swiper-item uni-bg-red">A</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">C</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<ul>
			<li>这是第1个Li</li>
			<li>这是第2个Li</li>
			<li>这是第3个Li</li>
			<li>这是第4个Li</li>
			<li>这是第5个Li</li>
			<li>这是第6个Li</li>
			<li>这是第7个Li</li>
			<li>这是第8个Li</li>
			<li>这是第9个Li</li>
			<li>这是第10个Li</li>
			<li>这是第11个Li</li>
			<li>这是第12个Li</li>
			<li>这是第13个Li</li>
			<li>这是第14个Li</li>
			<li>这是第15个Li</li>
			<li>这是第16个Li</li>
			<li>这是第17个Li</li>
			<li>这是第18个Li</li>
			<li>这是第19个Li</li>
			<li>这是第20个Li</li>
		</ul>
		<navigator url="../cartoinfo/cartoinfo" open-type="navigate">
			<button type="default" @click="chat">进入商铺详情页面</button>
		</navigator>
		<input type="text" placeholder="请输入你要搜的商品" confirm-type="search">


		<button type="primary" @click="pleaseClick" class="btn">请点击</button>
		<uni-popup ref="popup" type="center">
			<uni-popup-message type="message" message="成功消息" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				title: '123',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				}
			}
		},
		methods: {
			pleaseClick() {
				// this.$refs.popup.open()
				console.log('触发了');
				// 调用摄像头
				// #ifdef APP-PLUS
				var cmr = plus.camera.getCamera();
				var res = cmr.supportedImageResolutions[0];
				var fmt = cmr.supportedImageFormats[0];
				console.log("Resolution: " + res + ", Format: " + fmt);
				cmr.captureImage(function(path) {
						console.log("Capture image success: " ,path);
					},
					function(error) {
						alert("Capture image failed: " + error.message);
					}, {
						resolution: res,
						format: fmt,
						// filename:'_doc/'s
					}
				);
				// #endif
				
			},
			tap: function(e) {
				console.log('触发了');
				this.x = this.old.x
				this.y = this.old.y
				this.$nextTick(function() {
					this.x = 30
					this.y = 30
				})
			},
			onChange: function(e) {
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			},
			chat() {
				console.log('触发了');
				// plus.runtime.openURL('../cartoinfo/cartoinfo')

			}
		}
	}
</script>

<style scoped>
	.content {
		/* #ifdef APP-NVUE */
		margin-top: 30px;
		/* #endif */
		/* padding:0 20px; */
	}

	.title {
		/* background-color: #d6d6d6; */
		height: 40px;
		display: flex;
		align-items: center;
		border: 1px solid #8F8F94;
		width: 80%;
		margin: 0 auto;
	}

	.img {
		height: 40px;
		width: 40px;
	}

	/deep/ uni-input {
		display: inline-block;
		background-color: #fff;
		height: 40px;
	}

	.search {
		display: flex;
		background-color: #FFFFFF;
		height: 40px;
		align-items: center;
		width: 40px;
		justify-content: center;
	}

	.uni-bg-red {
		background-color: #DD524D;
		height: 100%;
	}

	.uni-bg-green {
		background-color: #F0AD4E;
		height: 100%;
	}

	.uni-bg-blue {
		background-color: #C8C7CC;
		height: 100%;
	}

	.page-section-spacing,
	.btn {
		margin-top: 20px;

	}

	.iconfont {
		font-size: 20px;
		color: #777777;
	}
</style>
