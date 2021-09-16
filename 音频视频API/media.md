只读属性
duration ---获取媒体文件的播放时长，以s为单位，如果无法获取则为NaN，当触发canplay事件后就可以获取当前总长度
startTime---返回起始播放时间，一般是0.0,除非是缓冲过的媒体文件，并一部分内容已经不再缓冲区(此属性好像已经不可用)
paused-----判断是否已经暂停，返回true/false
ended-----判断是否已经播放完毕，返回true/false
error----在发生了错误后，返回错误代码
currentSrc --以字符串的形式发挥正在播放或已经加载的文件，对应浏览器在source元素中选择的文件
buffered---获取当前缓冲区大小，返回TimeRanges对象，点击更多参考

可控制属性
src----指定音频的文件位置
autoplay---是否自动播放
preload----是否预加载
loop------是否循环播放
controls----显示或隐藏用户控制界面
autobuffer---媒体文件播放前是否进行缓冲加载，如果设置了autoplay，则忽略此特性(此属性好像已经不可用)
muted------设置是否静音
volume ----在0.0到1.0间的音量值，或查询当前音量值
currentTime--以s为单位返回从开始播放到目前所花的时间，也可设置currentTime的值来跳转到特定位置
playbackRate = speed;//改变速度

方法
load() ---加载音频、视频软件
paly() ---播放
pause()---暂停
canPlayType(obj) ----测试饭后指定指定的Mime类型的文件

事件
loadstart ---客户端开始请求数据
progress----正在播放的时候不停触发，如果暂停不会触发，触发的时间间隔比较大
play------play()和autopaly播放时，类似事件onplaying
pause-----pause()方法触发时
ended-----当结束播放时
timeupdate----当前播放时间发生改变的时候，播放中常用的时间处理，如果暂停不会触发，触发的时间间隔比较小
canplaythrough---歌曲已经载入完成
canplay -----缓冲至可播放状态，类似事件onloadedmetadata
onloadedmetadata----当元数据（比如分辨率尺寸和时长）被加载时运行的脚本