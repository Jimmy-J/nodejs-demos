// 引入 events 模块
var events = require('events');
// 直接创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// ---------------------------------------------------
// 获得 EventEmitter对象
var EventEmitter = require('events').EventEmitter;
// 创建获得的 EventEmitter 对象
var event = new EventEmitter();
// 使用匿名函数绑定 some_event 事件 
event.on('some_event', function() {
	console.log('some_event 事件触发');
});
// 倒计时 1秒后触发 some_event 事件
setTimeout(function() {
	event.emit('some_event')
}, 1000);

// 注册事件并传入参数 
event.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});

event.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
})

event.emit('someEvent', 'arg1 参数',
	'arg2 参数');

// EventEmitter 提供多个属性，如 on 和 emit 。on 函数用于绑定事件函数，emit 属性用于触发一个事件。

// EventEmitter 类的应用 

// 监听器 1 
var listener1 = function listener1() {
	console.log('监听器 listener1 执行 ！');
};


var listener2 = function listener2() {
	console.log('监听器 lsitener2 执行');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2 
eventEmitter.addListener('connection', listener2);

// 通过 EventEmitter 的 listenerCount 类方法获得某个事件监听器的数量 
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器连接事件。");

// 处理事件 connection 
eventEmitter.emit('connection');

// EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，
// 我们在遇到 异常的时候通常会触发 error 事件。
// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，
// Node.js 会把它当作异常，退出程序并输出错误信息。
eventEmitter.on('error', function(err) {
	console.error(err);
})
eventEmitter.emit('error', '错误');

// 移除绑定的 listener1  函数 
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再受监听');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + '个监听器连接事件。');