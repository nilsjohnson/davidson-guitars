import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class Resize
{
	public static void main(String[] args)
	{
		for(String str : args) {
			System.out.println(str);
		}
		
		if(args.length < 4)
		{
			System.out.println("arguments must be: <input path> <output path> <width> <height>");
		}
		String iputPath = args[0];
		String outputPath = args [1];
		int width = Integer.parseInt(args[2]);
		int height = Integer.parseInt(args[3]);
		
		double ratio = (double)width/(double)height;
	
		
		try
		{
			BufferedImage image = ImageIO.read(new File(iputPath));
			BufferedImage croppedImage = cropImage(image, ratio);
			
			int type = croppedImage.getType() == 0 ? BufferedImage.TYPE_INT_ARGB : croppedImage.getType();
			
			BufferedImage resizedImage = resizeImage(croppedImage, type, width, height);
			
			writeImageToFile(resizedImage, outputPath);
		}
		catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static BufferedImage resizeImage(BufferedImage image, int type, int width, int height)
	{
		BufferedImage resizedImage = new BufferedImage(width, height, type);
		Graphics2D g = resizedImage.createGraphics();
		g.drawImage(image, 0, 0, width, height, null);
		g.dispose();

		return resizedImage;
	}
	
	public static BufferedImage cropImage(BufferedImage image, double ratio)
	{
		int imgWidth = image.getWidth();
		int imgHeight = image.getHeight();
		double imageRatio =  (double)imgWidth/(double)imgHeight;
		
		// this means we chop off the top and bottom
		if(imageRatio < ratio)
		{
			double targetHeight = imgWidth*1.0/ratio;
			double y = ((imgHeight-targetHeight)/2);
			return image.getSubimage(0, (int)y, imgWidth, (int)targetHeight);
		}
		// this means we chop off the sides
		else if (imageRatio > ratio)
		{	
			double targetWidth = imgHeight*1.0/ratio;
			double x = ((imgWidth-targetWidth)/2);
			return image.getSubimage((int) x, 0, (int)targetWidth, imgHeight);
		}
		else if (imageRatio == ratio)
		{
			//do nothing at this point
		}
		
		return image;
	}
	
	public static void writeImageToFile(BufferedImage image, String path) throws IOException
	{
		ImageIO.write(image, "jpg", new File(path));
	}
}
