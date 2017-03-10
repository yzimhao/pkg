# pkg

    一个快速导出git最近修改的文件工具，导出两个版本之间差异的文件。

## 安装

```
wget --no-check-certificate http://t.cn/RMRAhQE  -O /usr/bin/pkg
chmod +x /usr/bin/pkg
```

## 参数
    * -v  从git版本库里导出的版本，如为空则为最近一次提交的修改，导出文件为zip压缩包
    * -s  scp上传的服务器，该参数依赖.ssh文件夹下的config配置
    * -l  上传到-s参数的服务器后，是否直接登录服务器
    * -a  导出整个git仓库里的所有文件

## 使用
进入你的git项目任意目录，执行pkg命令:
```shell
[baby@localhost pkg]$ pkg
/usr/bin/pkg Ver 0.0.10
Already up-to-date.
  adding: README.md (deflated 29%)
  adding: package.json (deflated 43%)
  adding: pkg (deflated 60%)
Filename: pkg-HEAD-20170310113945.zip
Path: /home/baby/pubcode/pkg-HEAD-20170310113945.zip
```
