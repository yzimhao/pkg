# pkg

## 安装

```
wget --no-check-certificate http://t.cn/RMRAhQE  -O /usr/bin/pkg
chmod +x /usr/bin/pkg
```

## 使用

* -v  从git版本库里导出的版本，如为空则为最近一次提交的修改，导出文件为zip压缩包

* -s  scp上传的服务器，该参数依赖.ssh文件夹下的config配置

* -l  上传到-s参数的服务器后，是否直接登录服务器

* -a  导出整个git仓库里的所有文件
