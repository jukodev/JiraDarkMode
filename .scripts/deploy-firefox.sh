originDir='../extension'

# manifest version for firefox
manifestVersion=2

# clone entire extension directory
targetDir='../extension_firefox'
cp -r $originDir $targetDir

manifestFileFirefox="$targetDir/manifest.json"

# change manifest version
jq ".manifest_version = $manifestVersion" $manifestFileFirefox > $manifestFileFirefox.tmp && mv $manifestFileFirefox.tmp $manifestFileFirefox

# change 'action' key to 'browser_action'
jq '.["browser_action"] = .action | del(.action)' $manifestFileFirefox > $manifestFileFirefox.tmp && mv $manifestFileFirefox.tmp $manifestFileFirefox

cd $targetDir
zip -r "../extension_firefox.zip" ./*
