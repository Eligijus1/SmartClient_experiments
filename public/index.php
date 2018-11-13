<?php
    header("Cache-Control: no-cache, must-revalidate"); //HTTP 1.1
    header("Pragma: no-cache"); //HTTP 1.0
    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="Cache-control" content="no-cache">
    <title></title>

    <?php /*
    <script src="js/libraries/q.js"></script>
    <script src="js/libraries/underscore-min.js"></script>
    <script src="js/libraries/underscore.string.min.js"></script>
    <script src="js/libraries/decimal.js"></script>
    <script src="js/libraries/sockjs-0.3.js"></script>
    <script src="js/libraries/stomp.js"></script>
    */
    ?>

    <script>
        var isomorphicDir = "isomorphic/";
        var VERSION = 0.1;
    </script>

    <script src=isomorphic/system/modules-debug/ISC_Core.js></script>
    <script src=isomorphic/system/modules-debug/ISC_Foundation.js></script>
    <script src=isomorphic/system/modules-debug/ISC_Containers.js></script>
    <script src=isomorphic/system/modules-debug/ISC_Grids.js></script>
    <script src=isomorphic/system/modules-debug/ISC_Forms.js></script>
    <script src=isomorphic/system/modules-debug/ISC_DataBinding.js></script>
    <script src=isomorphic/skins/EnterpriseBlue/load_skin.js></script>

    <script src="js/application.js"></script>
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" />
</head>
<body>
<div id="error-new-version-detected" style="display: none;">
    <div><span>You are using an old version of application, please <a href="javascript: location.reload();">refresh</a> your browser.</span></div>
</div>

<?php /*
<div id="loading"><img src="img/ajax-loader.gif" alt="Loading"/></div>
 */ ?>
<script>bootstrap.initialize();</script>
</body>
</html>
