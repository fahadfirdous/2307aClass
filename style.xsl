<?xml version="1.0" encoding="UTF-8" ?> 
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html> 
<body> 
<h1 align="center">Students' Basic Details</h1> 
<table border="3" align="center" > 
<tr> 
	<th>Name</th> 
	<th>Branch</th> 
	<th>Age</th> 
	<th>City</th> 
</tr> 
	<xsl:for-each select="student/s"> 
<tr> 
	<td><xsl:value-of select="name"/></td> 
	<td><xsl:value-of select="branch"/></td> 
	<td><xsl:value-of select="age"/></td> 
	<td><xsl:value-of select="city"/></td> 
</tr> 
	</xsl:for-each> 
	</table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet> 

<!-- <?xml version="1.0" encoding="UTF-8"?>

 <html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:a="file://Volumes/u1234567/Assignment">


<body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">

<xsl:for-each select="breakfast_menu/food">




<div style="background-color:teal;color:white;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="a:name"/> - </span>
    <xsl:value-of select="price"/>
</div>

  <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <p>
    <xsl:value-of select="description"/>
    <span style="font-style:italic"> (<xsl:value-of select="calories"/> calories per serving)</span>
    </p>
  </div>


</xsl:for-each>

</body>
</html> -->