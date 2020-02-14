class BounceWhenHitComponent extends Component
{
    private Hit = false;

    Notified()
    {
        //This should be notified if it's owner collides with something.
        this.Hit = true;
    }

    Update(): void
    {
        if (this.Hit)
        {
            //Calculate a new velocity from current velocity.
            this.Hit = false;
        }
    }
}