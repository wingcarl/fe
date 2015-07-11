# GIT语法 #
## git分区
+ 工作区
+ 暂存区
+ 版本库区
## git常用语法
+ git status
+ git add / git add . 
+ git commit / git commit -a -m "comments"
+ git reset HEAD README.md 撤销文件(将暂存区的版本还原到版本库区)
+ git checkout -- <filename> 将工作区还原为版本库区的内容
+ git commit --amend 将上一次的提交撤销掉
+ git log 查看日志文件
## git diff
+ git diff  
工作区与暂存区的对比
+ git diff --cached / git diff --staged
暂存区与版本库区的对比
+ git diff master
工作区与版本库区的对比