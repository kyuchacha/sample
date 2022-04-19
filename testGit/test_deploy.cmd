echo "===========jeusadmin connect==========="
jeusadmin -u administrator -p 123456789! 
echo "===========install==========="
install-application -id sample D:\Jenkins\workspace\mavenTest\testGit\target\testGit-0.0.1-SNAPSHOT.war
echo "===========deploy==========="
deploy sample -servers server1 -contextPath /sample
