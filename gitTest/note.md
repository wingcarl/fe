﻿# GIT语法 #
## git分区 ##
+ 工作区
+ 暂存区
+ 版本库区

## git常用语法 ##
+ git status
+ git add / git add . 
+ git commit / git commit -a -m "comments"
+ git reset HEAD README.md 撤销文件(将暂存区的版本还原到版本库区)
+ git checkout -- <filename> 将工作区还原为版本库区的内容
+ git commit --amend 将上一次的提交撤销掉
+ git log 查看日志文件

## git diff ##
+ git diff  
工作区与暂存区的对比
+ git diff --cached / git diff --staged
暂存区与版本库区的对比
+ git diff master
工作区与版本库区的对比

## git rm ##
+ git rm <filename> 将暂存区中的文件删除
+ git rm -f <filename> 将暂存区中的文件删除，同时工作区的文件也删除！
+ git rm --cached <filename> 将暂存区中的文件删除，同时工作区的文件保留！

## 版本恢复 ##
+ git checkout id <filename> 恢复某个文件为某个IDcommit下的版本
+ git reset --hard id 恢复整个工作区为某个ID commit下的版本
+ git reset -head~<num>	向前恢复num个版本
+ git reset --hard -head^ 向前恢复一个版本
+ git reflog 查看git日志的详细版本
+ git branch <filename> 创建分支
+ git checkout <branchname> 切换分支
+ git checkout -b <barnchname> 创建并切换到相应的分支
+ git merge <branchname>
+ git branch -d <branchname> 删除分支
+ git branch -D <branchname> 强制删除分支 

##git pull / git fetch##
+ git pull 不会做冲突检测
+ git fetch 需要手动合并冲突
