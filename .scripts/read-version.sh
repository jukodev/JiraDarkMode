originDir='../extension'
manifestFile="$originDir/manifest.json"

jq '.version' $manifestFile | sed 's/\"//g'
