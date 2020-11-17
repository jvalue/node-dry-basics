#! /bin/bash
cd "$1" || exit

# read parameters via npm
PACKAGE_NAME=$(npm run get:name -s) || exit
echo "Package name: $PACKAGE_NAME"

CURRENT_PACKAGE_VERSION=$(npm run get:version -s) || exit
echo "Local version: $CURRENT_PACKAGE_VERSION"

PUBLISHED_PACKAGE_VERSION=$(npm show "$PACKAGE_NAME") || PUBLISHED_PACKAGE_VERSION="0.0.0"
echo "Latest published version: $PUBLISHED_PACKAGE_VERSION"


# points to spaces
CURRENT_PACKAGE_VERSION_SPACED=${CURRENT_PACKAGE_VERSION//./ }
PUBLISHED_PACKAGE_VERSION_SPACED=${PUBLISHED_PACKAGE_VERSION//./ }

# extract version numbers
CURRENT_PACKAGE_VERSION_PATH_MAJOR=$(echo "$CURRENT_PACKAGE_VERSION_SPACED" | awk '{print $1}')
CURRENT_PACKAGE_VERSION_PATH_MINOR=$(echo "$CURRENT_PACKAGE_VERSION_SPACED" | awk '{print $2}')
CURRENT_PACKAGE_VERSION_PATH=$(echo "$CURRENT_PACKAGE_VERSION_SPACED" | awk '{print $3}')

PUBLISHED_PACKAGE_VERSION_MAJOR=$(echo "$PUBLISHED_PACKAGE_VERSION_SPACED" | awk '{print $1}')
PUBLISHED_PACKAGE_VERSION_MINOR=$(echo "$PUBLISHED_PACKAGE_VERSION_SPACED" | awk '{print $2}')
PUBLISHED_PACKAGE_VERSION_PATCH=$(echo "$PUBLISHED_PACKAGE_VERSION_SPACED" | awk '{print $3}')

publish() {
    npm publish --access public
}

if [ "$CURRENT_PACKAGE_VERSION_PATH_MAJOR" -gt "$PUBLISHED_PACKAGE_VERSION_MAJOR"  ] 
then
    echo "Detected package '$1' major version bump from version $PUBLISHED_PACKAGE_VERSION to $CURRENT_PACKAGE_VERSION."
    publish
elif [ "$CURRENT_PACKAGE_VERSION_PATH_MAJOR" -eq "$PUBLISHED_PACKAGE_VERSION_MAJOR" ] && [ "$CURRENT_PACKAGE_VERSION_PATH_MINOR" -gt "$PUBLISHED_PACKAGE_VERSION_MINOR"  ]
then
    echo "Detected package '$1' minor version bump from version $PUBLISHED_PACKAGE_VERSION to $CURRENT_PACKAGE_VERSION."
    publish
elif [ "$CURRENT_PACKAGE_VERSION_PATH_MAJOR" -eq "$PUBLISHED_PACKAGE_VERSION_MAJOR" ] && [ "$CURRENT_PACKAGE_VERSION_PATH_MINOR" -eq "$PUBLISHED_PACKAGE_VERSION_MINOR"  ] && [ "$CURRENT_PACKAGE_VERSION_PATH" -gt "$PUBLISHED_PACKAGE_VERSION_PATCH"  ]
then
    echo "Detected package '$1' patch version bump from version $PUBLISHED_PACKAGE_VERSION to $CURRENT_PACKAGE_VERSION."
    publish
else
    echo "No version bump detected. Nothing to do here."
fi