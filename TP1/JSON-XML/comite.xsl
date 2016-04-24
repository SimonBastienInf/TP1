<?xml version="1.0" encoding="UTF-8" ?>
<!--comite-->

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!--<xsl:output encoding="UTF-8" indent="yes" method="xml" />-->
<html>
	<body>
    <xsl:template match="/">
    	<ol>
    		<xsl: for-each select="comite/personnalite/nom">
    			<li><xsl: value-of select="nom"/></li>
    		</xsl: for-each>
    	</ol>
    </xsl:template>
</xsl:stylesheet>
</body>
</html>
