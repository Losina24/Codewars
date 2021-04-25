function isTriangle(a,b,c)
{
   return a+c -b > 0 && a+b -c > 0 && b+c - a > 0 && a > 0 && b > 0 && c > 0
}