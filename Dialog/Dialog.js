Component({
    properties: {
        // 标题
        title: {
            type: String,
            value: ''
        },

        // 取消的文本
        cancelText: {
            type: String,
            value: ''
        },

        // 确认的文本
        confirmText: {
            type: String,
            value: ''
        },

        // 内容
        content: {
            type: String,
            value: ''
        }
    },

    data: {
        isShow: false
    },

    methods: {
        // dialog隐藏
        hideDialog: function () {
            if (this.data.isShow) {
                this.setData({
                    isShow: !this.data.isShow
                })
            }
        },

        // dialog显示
        showDialog: function () {
            if (!this.data.isShow) {
                this.setData({
                    isShow: !this.data.isShow
                })
            }
        },

        // 取消事件，向外部page，发送事件通知
        _canceldialog: function () {
            this.triggerEvent("cancelEvent");
        },

        // 确认事件
        _confirmdialog: function () {
            this.triggerEvent("confirmEvent");
        }
    }
})