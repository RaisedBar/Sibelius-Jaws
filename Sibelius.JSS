; Sibelius.jss
; Test script for Sibelius 2019R9

include "HJConst.jsh"

; Need a function to indicate whether we're in the notation window - fake it for now
int Function IsScoreWindow()
Var
	int blnResult = TRUE

return blnResult
EndFunction


Script ScriptFileName ()
Say ("Sibelius 2019 scripts", OT_JAWS_MESSAGE, FALSE)
EndScript

Script PreviousStaff ()
If (IsScoreWindow())
	{Ctrl+Alt+UpArrow}
else
	UpCell()
endif
EndScript

Script NextStaff ()
If (IsScoreWindow())
	{Ctrl+Alt+DownArrow}
else
	DownCell()
endif
EndScript


Script OctaveUp ()
if (IsScoreWindow())
	{Ctrl+UpArrow}
else
	ControlUpArrow()
endif
EndScript

Script OctaveDown ()
if (IsScoreWindow())
	{Ctrl+DownArrow}
else
	ControlDownArrow()
endif
EndScript


Script SwapNextNoteOrRest ()
If (IsScoreWindow())
	{Ctrl+Alt+RightArrow}
else
	NextCell()
endif
EndScript


Script SwapPreviousNoteOrRest ()
If (IsScoreWindow())
	{Ctrl+Alt+LeftArrow}
else
	PriorCell()
endif
EndScript
