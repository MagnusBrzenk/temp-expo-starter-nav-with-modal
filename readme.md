# iOS Bug

## Description

This repo is supposed to reproduce a bug encountered on physical iOS. My original goal was to start with a blank tsc project, and just make sure I could get a modal working that can launch a navigation stack. Basic stuff for a native app.

My app works fine when exported to web, or when run on an iOS simulator. However, when run on an iPhone (via expo go, and also even as a full production build through xcode), there is something MASSIVELY wrong with tap interactions within modals. Tapping on a simple link or button struggles to register any event, and when an event is registered on like the ~10th tap, then the navigation stack that is supposed to get triggered does NOT get triggered. You can slide to close the modal, but otherwise nothing seems to work therein. In summary, something is really messed up in modal on iOS. I will refer to this as the "iOS Bug" from hereon.

## Further Notes on iOS Bug

- Strange Behavior 1: the iOS bug disappears if you include `headerShown: false` in the modal's parent.

- Strange Behavior 2: I looked around for other simple expo projects to see if I got the same behavior everywhere (in which case, it might be something about my phone or setup). I found a repo that builds and works fine on my iPhone -- no issues with modals at all. You can see a version of that "working code" [here](https://github.com/MagnusBrzenk/temp-colby-sonn). I tried to figure out what was different about this working code in order to understand the root cause of the iOS Bug in my problematic code. This working code proved impervious, i.e. I could not reproduce the iOS Bug with this alternative organization of expo routing components (I compared lots of things between the working and problematic code, including different library versions, the headerShown: false flag, etc.). I concluded that what probably makes the iOS Bug not show up with this working code likely relates to the way its routing/layouts are organized. I include this link to the working code in case it helps figure out what the root cause of the iOS bug is.

## Steps to Reproduce

```
git clone https://github.com/MagnusBrzenk/temp-expo-starter-nav-with-modal
cd temp-expo-starter-nav-with-modal
npm i
npx expo prebuild --clean
npx expo run:ios
```

- Connect with iPhone using expo go, etc.
- In the first tab, there is an 'info' icon in the top right; click to launch a modal; notice that tapping on any of the buttons fails to register a new navigation stack
- Uncomment code on line 61 of app/\_layout.tsx so that `headerShown: false` now applies; observe that the modal works fine now
