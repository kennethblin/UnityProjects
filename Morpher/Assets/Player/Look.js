    var minimumX = -360.0;
    var maximumX = 360.0;
 
    var minimumY = -60.0;
    var maximumY = 60.0;
 
    var rotationX : float;
    var rotationY : float;

    var sensitivity : float;
 
    function Update ()
    {
            sensitivity = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getSensitivity();
	        rotationX = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotX();
	        rotationY = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotY();
            rotationX += Input.GetAxis("Mouse X") * sensitivity;
            rotationY += Input.GetAxis("Mouse Y") * sensitivity;
            Adjust360andClamp();
            GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).setRotX(rotationX);
            GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).setRotY(rotationY);

            transform.localRotation = Quaternion.AngleAxis (rotationX, Vector3.up);
            transform.localRotation *= Quaternion.AngleAxis (rotationY, Vector3.left);
    }
 
    function Adjust360andClamp ()
    {

        if (rotationX <= -360)
        {
            rotationX += 360;
        }
        else if (rotationX >= 360)
        {
            rotationX -= 360;
        }   
 
        if (rotationY < -360)
        {
            rotationY += 360;
        }
        else if (rotationY > 360)
        {
            rotationY -= 360;
        }

        rotationX = Mathf.Clamp (rotationX, minimumX, maximumX);
        rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
    }
 
    function Start ()
    {
        
        sensitivity = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getSensitivity();
        rotationX = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotX();
        rotationY = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotY();
        
        Screen.lockCursor = true;
    }